import React, {useEffect, useState} from 'react';
import axios from "axios";
import CountUp from "react-countup";

const Indonesia = () =>{
    const[konfirmasi, setkonfirmasi] = useState([])
    const[sembuh, setsembuh] = useState([])
    const[mati, setmati] = useState([])

    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) => {
            setkonfirmasi(response.data.konfirmasi)
            setsembuh(response.data.sembuh)
            setmati(response.data.mati)
        });
    }, []);

            return (
                <div className="center">
        
        <div className="card-container">
             <h1>konfirmasi
                <p><CountUp start={0} end={konfirmasi} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>

            <div className="card2-container">
             <h1>sembuh
                <p><CountUp start={0} end={sembuh} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>

                     <div className="card1-container">
             <h1>mati
                <p><CountUp start={0} end={mati} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
     </div>

    
            );
            
};


export default Indonesia;