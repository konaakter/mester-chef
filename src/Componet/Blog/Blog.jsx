import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PDFile from '../PDFile/PDFile';

const Blog = () => {

    /**********************************************ouestoin ans******************************** */
    return (
        <div>
            <div className='bg-color text-white pb-20'>
                <div className='container max-auto lg:p-32 p-20'>
                    <div className=" pt-12">
                        <h1 className='font-medium text-2xl pb-4'>
                            Tell us the differences between uncontrolled and controlled components?
                        </h1>
                        <p className='text-slate-500'>

                            Uncontrolled components handle their own internal state and don't receive outside control. They are simpler and used for basic UI elements like input fields and buttons.

                            Controlled components, on the other hand, are controlled by an external source, like a framework or state management system. They handle more complex UI interactions and display data, receiving outside control and management.
                        </p>
                    </div>
                    <div className="mt-12">
                        <h1 className='font-medium text-2xl mb-4'>
                            How to validate React props using PropTypes?
                        </h1>
                        <p className='text-slate-500'>

                            PropTypes is a package in React that allows you to check the data types of the props passed to a component. You can use it to make sure that your component receives the right type of data, and it will log a warning if a prop is not the correct type. To use it, you need to install it, import it, define the props for your component, and add the PropTypes validation for each prop.
                        </p>
                    </div>
                    <div className="mt-12">
                        <h1 className='font-medium text-2xl mb-4'>
                            Tell us the difference between nodejs and express js?
                        </h1>
                        <p className='text-slate-500'>

                            Node.js is a runtime environment that allows you to run JavaScript on the server-side, while Express.js is a web application framework that is built on top of Node.js and provides additional tools and features for building web applications. In simpler terms, Node.js is the foundation, while Express.js is an additional layer that makes it easier to build web applications using Node.js.
                        </p>
                    </div>
                    <div className="mt-12">
                        <h1 className='font-medium text-2xl mb-4'>
                            What is a custom hook, and why will you create a custom hook?
                        </h1>
                        <p className='text-slate-500'>

                            A custom hook is a reusable JavaScript function in React that uses built-in React hooks and/or other custom hooks to encapsulate complex logic and state management. You would create a custom hook to extract commonly used functionality or state management logic from a component and reuse it across multiple components, making your code more modular and reusable. Custom hooks are especially useful when you want to share stateful logic between different components that are not necessarily related to each other in the component hierarchy.
                        </p>
                    </div>
                </div>

                <div className='container mx-auto'>
                    <PDFDownloadLink document={<PDFile></PDFile>} filename="FORM">
                        {({ loading }) => (loading ? < button className=' border bg-orange-600 p-5'>Loading Document...</button> : <button className=' border bg-orange-600 p-5'>Downlond PDF</button>)}
                    </PDFDownloadLink>
                    {/* <PDFFile /> */}
                </div>

            </div>
        </div>
    );
};

export default Blog;