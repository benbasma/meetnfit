import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Form,FormControl,Button,Container} from 'react-bootstrap'
import './ListEvenement.css'
import axios from 'axios';


export const ListEvenement = () => {
  const [evenement, setEvenement] = useState([]);
  useEffect(() =>{
    axios
    .get("http://localhost:8080/evenement", JSON.stringify(evenement), {
      headers: {
        "Content-Type": "application/json",
      },
    })
   .then((res) => {
     setEvenement(res.data)
     console.log(res.data);

   } )
   .catch((error) => {
     console.log("Error:", error);
   });
  },{})
 // var keyword = document.getElementById("search").value;  
  function rechercher(){
   
      var  keyword = document.getElementById("search").value;
      console.log( keyword);
    
    axios
    .get("http://localhost:8080/evenement/get?titre="+
      keyword+"&adresse="+keyword
    , JSON.stringify(evenement), {
      headers: {
        "Content-Type": "application/json",
      },
    })
   .then((res) => {
     setEvenement(res.data)
     console.log(res.data);

   } )
   .catch((error) => {
     console.log("Error:", error);
   });
  }
  function decrementer(nbre){
          nbre=nbre-1;
      var a= document.getElementById("Modifnbre").innerHTML = nbre;
      alert(a);
  }
  function afficherImg(titre){
    if(titre==='Football')
        return <img src='foot.jpg' height="100px" width="100px"/>
  }


  return (
  
    <div className='containers'>   
         <div align="right">
              <input 
            type="search"
            placeholder="Search"
            className="search"
            aria-label="Search"
            id="search"
          />
          <button className='rechercher' onClick={rechercher} id="myButton">Search</button>
          </div> 
           <br></br>   
    <Link to={"/creer"} className="btn-creer">Créer une activitée</Link><br></br>
       <h2 className='text-center'>Liste des activitées</h2>
       <div className='col-s6-m4'>
           {   evenement.map(
                  evenement => 
    
                  <div key={evenement.id}>
                    <div className='card-horizontal'>
                    <div className='card content'>
                      {afficherImg(evenement.titre)}
                     <h3 >{evenement.titre}</h3>
                     <p><span style={{ fontWeight:'bold' }}> Adresse : </span>{evenement.adresse}</p>
                     <p><span style={{ fontWeight:'bold' }}> Niveau : </span>{evenement.niveau}</p>
                     <p><span style={{ fontWeight:'bold' }}> Date : </span>{evenement.date}</p>
                     <p><span style={{ fontWeight:'bold' }}> Heure de début  : </span>{evenement.horaire}</p>
   
                     <span style={{ fontWeight:'bold' }}> Nombre de personne : </span><p id='Modifnbre' >{evenement.nbrePersonne}</p>
                       
                     <p><span style={{ fontWeight:'bold' }}> Description : </span>{evenement.description}</p>     
                     
                     { evenement.nbrePersonne>0 &&
                     <button className='btndanger' id='btndanger' onClick={()=>decrementer(evenement.nbrePersonne)}>Participer</button> 
                     }
                     </div>
                     </div>
                             
                  </div>
                  

               )
           }
       </div>
   
    </div>
  )
}