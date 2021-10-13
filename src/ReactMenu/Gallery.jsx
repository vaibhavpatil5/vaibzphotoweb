import React,{useState} from 'react';
import Imgsrc from "./Imgsrc";
import CloseIcon from '@material-ui/icons/Close';



const Gallery = () => {
    const [items, setItems] = useState(Imgsrc);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg =(imgSrc)=>{
        console.log(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    const filterpic =(catePic)=>{
        const updatedItems =Imgsrc.filter((curPic)=>{
            return curPic.category===catePic;
        });
        setItems(updatedItems);
    }
    return (
        <>
            <div className="my-5 text-center">
                <h1>Image Gallery</h1>
                <h4 className="mt-3">Some Of My Shots</h4>
                     </div>     
                     <div className="menu-tab container">
                            <button className="btn btn-info" onClick={()=>setItems(Imgsrc)}>All</button>
                            <button className="btn btn-info"onClick={()=>filterpic('nature')}>Nature</button>
                            <button className="btn btn-info"onClick={()=>filterpic('thunder')}>Thunder</button>
                            <button className="btn btn-info"onClick={()=>filterpic('birds')}>Birds</button>
                            <button className="btn btn-info"onClick={()=>filterpic('other')}>Others</button>
                     </div>

                     <div className="container-fluid mt-5">
                       
                            <div className="col-11 mx-auto">
                                <div className=" row my-5 ">
                                
                                <div className={model ? "model open":"model"}>
                                    <img src={tempimgSrc} loading='lazy'  alt="pic"/>
                                   
                                    <CloseIcon onClick={()=>setModel(false)}/>
                                </div>
                                    
                                    <div className="gallery">
                                    {
                                        items.map((elem,index)=>{
                                            //  const {id,imgSrc}=elem;
                                            return(

                                                <div className="pics" key={index} onClick={()=>getImg(elem.imgSrc)}>
                                                    <img src={elem.imgSrc} loading='lazy' style={{width:'100%'}} alt="pic" />
                                                    
                                                </div>
                                            );
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                 

                     </div>
        </>
    )
}

export default Gallery;
