import React, {useEffect, useState} from 'react';
import axios from "axios";
import CountUp from "react-countup";


const Global = () =>{
    const[con, setCon] = useState([])
    const[rec, setRec] = useState([])
    const[det, setDet] = useState([])

    useEffect(() => {
        axios
         .get("https://covid19.mathdro.id/api")
         .then((response) => {
             setCon(response.data.konfirmasi.value)
             setRec(response.data.sembuh.value)
             setDet(response.data.mati.value)
         });
    }, []);
  


    return (
    <div>
        
        <div className="left">
        <div className="konfirmasi">

        </div>
             <h1>konfirmasi
                <p><CountUp start={0} end={con} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
                     <div className="sembuh">
             <h1>sembuh
                <p><CountUp start={0} end={rec} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
                     <div className="mati">
             <h1>mati
                <p><CountUp start={0} end={det} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
                     
    </div>
        
    
            );
};

export default Global;