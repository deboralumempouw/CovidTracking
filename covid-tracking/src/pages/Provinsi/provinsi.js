import React, {useEffect, useState} from 'react';
import axios from "axios";
import NumberFormat from "react-number-format";

const Provinsi = () =>{
    const[users,setUsers] = useState([])
    

    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
         .then((response) =>  setUsers(response.data.data) );
    }, []);
   return(
       <div className="center">
           <table border="1">
               <tr>
                   <td> Provinsi
                   </td>
                   <td>
                       Konfirmasi
                   </td>
                   <td>
                       Sembuh
                   </td>
                   <td>
                        Mati
                   </td>
               </tr>
               {users.map((item)=>{
                   return(
                       <tr>
                           <td>
                               {item.provinsi}
                           </td>
                           <td>
                                <NumberFormat value={item.kasusKonfir} displayType={'text'} thousandSeparator={true}/>
                           </td>
                           <td>
                           <NumberFormat value={item.kasusSemb} displayType={'text'} thousandSeparator={true}/>
                           </td>
                           <td>
                           <NumberFormat value={item.kasusMati} displayType={'text'} thousandSeparator={true}/>
                           </td>
                       </tr>
                   )
               })
               }
           </table>
       </div>
   )
};

export default Provinsi;