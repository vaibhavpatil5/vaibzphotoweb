import React from 'react';
import pic from "../images/img1.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
                        
        <Common name='Hi! ' title=' Wel-come ' info="Photography has become my language to express my thinking,
         emotions to people. I love working with people's life style. I love Photography." subtit='Photography is about capturing souls not smiles..' imgsrc={pic} 
         visit="/service" btname="Get Started.."/>
        </>
    )
}

export default Home;
