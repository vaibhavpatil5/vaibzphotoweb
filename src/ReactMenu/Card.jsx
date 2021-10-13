import React from 'react';


const Card = (props) => {
    return (
        <>
           
            {/* <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={pic} className="card-img-top" alt="..."/>
                        <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.info}</p>
                                <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>
            </div> */}


                    <div className="col-lg-6 mt-4 pt-2">
                            <div className="media align-items-center rounded shadow p-3">
                                <h6 className="ml-3 mb-0">{props.name}</h6>
                            </div>
                        </div>
        </>
    )
}

export default Card;
