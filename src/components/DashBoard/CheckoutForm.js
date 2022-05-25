
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({paid}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError,setCardError]=useState('')
    const [clientSecret,setClientSecret]=useState('')
    const [proccessing , setProcessing] = useState(false)
    const [transaction, setTransaction] = useState('')
    const [success , setSuccess] = useState('')
    const {productPrice,UserName,bookingEmail,productId }=paid;

    useEffect(()=>{
        fetch("http://localhost:4000/create-payment-intent",{
        method:"POST",
        headers:{
          "content-type":"application/json",
          authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify({productPrice})
      })
      .then(res => res.json())
      .then(data =>{
        if(data?.clientSecret){
         setClientSecret(data.clientSecret)
        }

      })

    },[productPrice])


    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }

       const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          setCardError(error?.message || "")
          setSuccess('')

          const {paymentIntent, paymentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {  
                  name:UserName,
                  email:bookingEmail,
                },
              },
            },
          );

          if(paymentError){
              setCardError(paymentError?.message)
              success('')
          }
          else{
              setCardError("")
              setTransaction(paymentIntent.id)
              setSuccess(`Congratulation,${UserName} Your Payment Is successfully Completed`)
          }
  
      
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn mt-7 btn-sm bg-primary btn-primary text-white' type="submit" disabled={!stripe || !clientSecret}>
        Payment
      </button>
    </form>

    {
        cardError && <p className='text-red-600 font-bold'> {cardError} </p>
    }
    {
        success && <div className="">
            <p className='text-green-600 font-bold'> {success} </p>
            <p className='text-green-600 font-bold'> Your Transaction Id {transaction} </p>
        </div>
    }
        
        </>
    );
};

export default CheckoutForm;