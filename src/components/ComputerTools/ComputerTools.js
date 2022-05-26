
import ComputerDetails from './ComputerDetails';
import useTools from './../../hooks/useTools';

const ComputerTools = () => {
   const {computers}= useTools();
    return (
        <div className=''>
        <h1 className='text-center text-4xl text-primary font-bold mt-5 pt-5' > <span className='banner'>Some Products From Our manufacturers Outlet  </span> </h1>
        <div className="mt-5 ml-20 grid lg:grid-cols-3  gap-8 lg:px-32 ">
        {
               computers.map( computer => <ComputerDetails key={computer._id} computer={computer} > </ComputerDetails>  )
         }      

        </div>
    </div>
    );
};

export default ComputerTools;