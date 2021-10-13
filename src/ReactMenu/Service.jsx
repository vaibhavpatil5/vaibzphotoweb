import React from 'react';
import pic from "../images/fashion.svg";
import pic1 from "../images/product.svg";
import pic2 from "../images/videography.svg";
import Card from './Card';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Service</h1>
                     </div>     
                         {/* <Card title="vaibhav" info="xxxx"/>
                          <Card title="vaibhav" info="xxxx"/>
                          <Card title="vaibhav" info="xxxx"/>
                          <Card title="vaibhav" info="xxxx"/>
                          <Card title="vaibhav" info="xxxx"/>
                          <Card title="vaibhav" info="xxxx"/> */}
                        <div className="container mb-5 p-4">
                            <div className="row align-items-center">

                                {/* left pic section start */}
                                <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                                    <div className="row align-items-center">


                                        <div className="col-lg-6 col-md-6 col-6">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                        <img src={pic} className="img-fluid m-3" alt="pic" />
                                                        <div className="img-overlay bg-dark"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className="col-lg-6 col-md-6 col-6">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                        <img src={pic2} className="img-fluid m-3" alt="pic" />
                                                        <div className="img-overlay bg-dark"></div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                        <img src={pic1} className="img-fluid m-3" alt="pic" />
                                                        <div className="img-overlay bg-dark"></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        
                                    </div> 
                                </div>
                                {/* left pic section End */}


                                {/* Right pic section start */}

                                <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2 ">
                                    <div className="section-title ml-lg-5">
                                        
                                        <h4 className="title mb-4">
                                        MY PASSION = YOUR MOMENTS <br/>
                                           
                                        </h4>
                                        <p className="text-muted mb-0">I would like to give you a unique photography experience, 
                                            built to serve you best and
                                            capture your special moments for you and your families creatively and beautifully....</p>
                                           
                                           <Card name="Videography"/>
                                           <Card name="Fashion photoshoot"/>
                                           <Card name="Product photography"/>
                                            
                                    </div>
                                </div>
                                
                                    {/* Right pic section End */}

                                
                            </div>
                            
                        </div>
            </>
    )
}

export default Service;
