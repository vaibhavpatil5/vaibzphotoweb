import React from 'react';
import pic from "../images/img3.svg";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Contact = () => {

    return (
        <>
        <div className="my-5 text-center">
            <h1> Feel inspired 😍</h1>
            <h5>Lets connect! I'd love hear about your story and <br/>
                how I might be able to help through photography...</h5>
        </div>
        


        <section id="header" className="d-flex align-items-center my-5">
         <div className="container-fluid">
                <div className="row">
                   

                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">


                    <Formik initialValues={
                        {
                            Name:'',
                            Email:'',
                            Phone:'',
                            Message:''
                            
                        }
                     }

                     validationSchema={
                         yup.object({
                             Name:yup.string()
                                    .required('Enter Your Name'),

                            Email:yup.string()
                                    .required('Enter Your Valid Email')
                                    .email('Invalid Email'),

                            Phone:yup.string()
                                    .matches(phoneRegExp, 'Phone number is not valid')
                                    .min(10, "to short")
                                    .max(10, "to long")
                                    .required('A phone number is required'),

                            Message:yup.string()
                                    .required('Write Your Message..!'),

                         })
                     }
                     
                     onSubmit={
                         values=>{
                             //alert(JSON.stringify(values));
                             alert('Thanks for Connecting...!');
                             values('');
                         }
                     }
                     >
                        {
                            props=>(

                                <Form>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <Field name="Name" type="text" className="form-control rounded border-0 shadow " id="exampleFormControlInput1" placeholder="Full Name" />
                                    <span className="text-danger"><ErrorMessage name="Name"></ErrorMessage></span>
                                </div>
    
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <Field name="Email" type="text" className="form-control rounded border-0 shadow " id="exampleFormControlInput1" placeholder="name@example.com" />
                                    <span className="text-danger"><ErrorMessage name="Email"></ErrorMessage></span>
                                </div>
    
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                    <Field name="Phone" type="text" className="form-control rounded border-0 shadow " id="exampleFormControlInput1" placeholder="0123456789" />
                                    <span className="text-danger"><ErrorMessage name="Phone"></ErrorMessage></span>
                                </div>
    
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <Field name="Message" className="form-control rounded border-0 shadow " id="exampleFormControlTextarea1" placeholder="Write a Msg..." rows="3" ></Field>
                                    <span className="text-danger"><ErrorMessage name="Message"></ErrorMessage></span>
                                    </div>
                                <div className="mt-5">
                                <div class="d-grid gap-2">
                                        <button class="btn btn-primary" disabled={props.isValid===false} type="submit">Submit</button>
                                </div>
                            </div>
    
                            </Form>

                            )



                        }

                    </Formik>
                   
                       </div>
                
                        <div className="col-md-6 order-1 order-lg-2 header-img">
                            <img src={pic} className="img-fluid animated" alt="home img" />
                        </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>  
        </>
    )
}

export default Contact;
