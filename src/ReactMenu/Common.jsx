import React from 'react';
    import { NavLink } from 'react-router-dom';
    import pic from "../images/vaibz1.png";



const Common = (props) => {
    return (
        <>
         <section id="header" className="d-flex align-items-center my-5">
         <div className="container-fluid">
                <div className="row">


                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-lg-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.name}<strong className="brand-name">{props.title}<img className="tit-logo" src={pic} alt="d"/></strong></h1>
                            <h2>{props.info}</h2>
                            <h5 className="my-3">{props.subtit}</h5>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                            </div>
                        </div>
                       

                        <div className="col-md-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>      
        </>
    )
}

export default Common;
