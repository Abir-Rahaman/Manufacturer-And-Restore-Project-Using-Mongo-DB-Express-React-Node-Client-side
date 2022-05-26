import React from 'react';

const Blogs = () => {
    return (
        <div className='px-20 py-32'>
            <h1 className='text-2xl text-primary'> How will you improve the performance of a React Application? <br /> Answer-01  </h1>
            <p className='font-bold'>React has revolutionized the way front-end developers create online applications, as well as its virtual DOM, is renowned for rendering components efficiently. We can upgrade the performance of React Application in the following methods: <br />
                1. All inline functions should be moved outside of render() so that it isn't redefined every render cycle. <br />
                2. Before changing the state or Redux store, we should make an effective comparison. <br />
                3. By deferring rendering of certain components before they are required. <br />
                4. Removing any redundant awaits and replacing them with Promise.all() whenever possible. <br />
                5. React code splitting with dynamic import() <br />
                6. To improve page load time, avoid rendering all the photos at once. <br />
                </p>
            <h1 className='text-2xl text-primary mt-10'>What are the different ways to manage a state in a React application? <br /> Answer-02 </h1>
            <p className='font-bold'>The state of a component's dynamic data is stored and controlled. The state assists in keeping the data of different components in sync because each state update re-renders all relevant components. It can also be used to communicate amongst different components. There are several state management libraries and solutions available since controlling the state is one of the most difficult components of any application. Among the various JavaScript UI frameworks, React has the most vibrant ecosystem, which includes state management libraries. <br />
                                            1. Recoil <br />
                                            2. Jotai <br /> 
                                            3. Redux <br />
                                            4. Rematch <br /> 
                                            5. Zustand <br /> 
                                            6. Hookstate <br />

                </p>
            <h1 className='text-2xl text-primary mt-10'>How does prototypical inheritance work <br /> Answer-03 </h1>
            <p className='font-bold'>Objects are abstractions of real-world entities or other objects in prototypal inheritance. A prototype is thus a generalization. Any object can be cloned utilizing prototypal inheritance and an object linking method. All objects in JavaScript have a hidden [[Prototype]] attribute that can be another object or null. We can get at it with obj. proto__. A "prototype" is the thing that [[Prototype]] refers to. If we try to read an obj property or access a method that doesn't exist, JavaScript looks for it in the prototype. The prototype is not used by write/delete operations because they act directly on the object. When we call obj.method() and the method is obtained from the prototype, the reference to obj remains. As a result, even if methods are inherited, they always function with the current object. The for..in loop loops through its own and inherited attributes. All other methods for retrieving keys and values only work on the object itself.

                </p>
            <h1 className='text-2xl text-primary mt-10'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts <br /> Answer-04 </h1>
            <p className='font-bold'>We should never update the state directly. When a component is rendered in React, whether in the mounting phase or the updating phase, it renders all of the components in its tree. React keeps track of its entire virtual DOM. When a change occurs, all components are rendered, and the new virtual DOM is compared to the previous virtual DOM. Only the differences identified in the original DOM are reflected. If we modify the state directly, it will also change the state's reference in the preceding virtual DOM. As a result, React will be unable to detect a state change, and the change will not be reflected in the original DOM until we reload. When we extend a component with React.PureComponent instead of React.component, the problem becomes more visible because React tries to save time by not rendering components if no changes are observed. Furthermore, simply changing the state can result in strange errors and difficult-to-optimize components. If we immediately update the state, executing setState() afterward may simply replace the previous update. Across all components, we will lose control of the state.
                </p>
            <h1 className='text-2xl text-primary mt-10'>What is a unit test? Why should write unit tests? <br /> Answer-05 </h1>
            <p className='font-bold'>Unit tests comprise automated tests that developers create and execute to ensure that a component of an application follows its design and works as expected. In procedural programming, a unit can be an entire module, although it's more common for it to be a single function or process. Unit testing is used to separate each component of software and demonstrate that each one is functioning properly. A unit test creates a formal agreement that the code must follow. As a result, it offers a number of benefits. You can write and manage unit tests faster by using parameterized tests. These enable a single test to be performed multiple times with different input sets, reducing test code duplication. Unit testing allows the programmer to restructure code or change system libraries at a later date while still guaranteeing that the module functions correctly. It is standard practice to create test cases for all functions and methods so that any modifications that cause a problem can be identified quickly. Unit tests discover changes that may break a design contract. Unit testing can be used to minimize uncertainty in the units themselves as a bottom-up testing strategy. Testing the components of software first and subsequently the aggregate of its pieces makes integration testing much easier. Unit testing serves as a form of live documentation for the system. Developers that wish to understand more about a unit's functionality and how to use it should look at the unit tests. For all of these benefits, we should write unit tests.
                </p>


        </div>
    );
};

export default Blogs;