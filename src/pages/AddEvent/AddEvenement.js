import React, { Component } from 'react'
import './AddEvenement.css'
import axios from "axios";
import { Link } from 'react-router-dom';

export default class AddEvenement extends Component {
  
   constructor(props){
       super(props)
       this.state={
        titre: '',
        date: '',
        horaire:'',
        adresse:'',
        description:'',
        nbrePersonne:'',
        niveau:'',
        
       }
    
    this.changeAdresseHandler=this.changeAdresseHandler.bind(this);
    this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
    this.changeHoraireHandler=this.changeHoraireHandler.bind(this);
    this.changeTitreHandler=this.changeTitreHandler.bind(this);
    this.changeDateHandler=this.changeDateHandler.bind(this);
    this.save=this.save.bind(this);
    this.afficherSucces=this.afficherSucces.bind(this);
       
  }
changeTitreHandler =e =>{
    this.setState({
      titre:e.target.value
    });
  };
  changeAdresseHandler =e =>{
    this.setState({
      adresse:e.target.value
    });
  };
  
  changeHoraireHandler =e =>{
    this.setState({
      horaire:e.target.value
    });
  };
  changeDescriptionHandler =e =>{
    this.setState({
      description:e.target.value
    });
  };
  changeDateHandler =e =>{
    this.setState({
      date:e.target.value
    });
  };
  changeNombreHandler =e =>{
    this.setState({
      nbrePersonne:e.target.value
    });
  };
  changeNiveauHandler =e =>{
    this.setState({
      niveau:e.target.value
    });
  };
  changeDébHandler =e =>{
    this.setState({
      niveau:e.target.value
    });
  };
  changeIntHandler =e =>{
    this.setState({
      niveau:e.target.value
    });
  };
  changeProfHandler =e =>{
    this.setState({
      niveau:e.target.value
    });
  };
  champObligatoireRempli=() =>{
        const champObligatoire = [this.state.titre,this.state.adresse,this.state.date,this.state.description,this.state.horaire,this.state.niveau,this.state.nbrePersonne]

        for (const champ of champObligatoire) {
          if(champ === ''){
            return false
          }
        }
        return true
  }

  afficherErreur=()=>{
    const errorMessageText = document.getElementById('ErrorMessage')
    errorMessageText.innerHTML = "Veuillez remplir tous les champs du formulaire ! "
    alert("Veuillez remplir tous les champs du formulaire ! ")
  }
  afficherSucces=()=>{
    const sucessMessageText = document.getElementById('ErrorMessage')
    sucessMessageText.innerHTML = "le formulaire à bien été sauvgarder "
    window.confirm("Voulez-vous vraiment sauvegarder ?");
  }
  save =e =>{
    e.preventDefault();
    if(this.champObligatoireRempli()){
    
    const evenement = {titre: this.state.titre,adresse: this.state.adresse,date: this.state.date, horaire: this.state.horaire,description: this.state.description, nbrePersonne:this.state.nbrePersonne, niveau:this.state.niveau};
    console.log('evenement=> ' + JSON.stringify(evenement));
    console.log(this.state);
    axios
          .post("http://localhost:8080/evenement/add", JSON.stringify(evenement), {
            headers: {
              "Content-Type": "application/json",
            },
          })
         .then((res) => console.log("evenement créer"),
         this.afficherSucces()
         )
         .catch((error) => {
           console.log("Error:", error);
           const sucessMessageText = document.getElementById('ErrorMessage')
          sucessMessageText.innerHTML = "Le formulaire est sauvgardé "
         });
        }else{
          this.afficherErreur()
        }
     
  };
  
  render() {
    return (
    
      <div className='main' >
        <div className='container'>

            <div className='row'>
                <div className= 'card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Créer une activitée</h2>
                       <div className='card-body'>
                           <form onSubmit={this.save}>
                              <div className='form-group'>
                                <label>Titre<em>*</em></label><br></br>
                                <input placeholder="Titre" name="titre" className="form-control"  onChange={this.changeTitreHandler } required="required"/><br></br>
                                <label>Adresse<em>*</em></label><br></br>
                                <input placeholder="Adresse" name="adresse" className="form-control"  onChange={this.changeAdresseHandler} /><br></br>
                               <label>Date<em>*</em></label><br/>
                                <input placeholder="yyyy-mm-dd" name="date" className="form-control"  type="date"  onChange={this.changeDateHandler}></input><br></br>
                               <label>Date de début<em>*</em></label><br/>
                                <input  name="horaire" className="form-control" type="time"  onChange={this.changeHoraireHandler}></input> <br/>
                                <label>Nombre de participant<em>*</em></label><br/>
                                <input type="number" name="nbrePersonne" onChange={this.changeNombreHandler}/><br></br>
                                <label>Niveau<em>*</em></label><br/>
                          
                               <select name="niveau"  onChange={this.changeNiveauHandler}>
                               <option vatlue="-----" >-----</option>
                                 <option value="Débutant" onChange={this.changeDébHandler}>Débutant</option>
                                 <option value="Intermédiaire" onChange={this.changeIntHandler}>ntermédiaire</option>
                                 <option value="Professionnelle" onChange={this.changeProfHandler}>Professionnelle</option>
                               </select><br></br>
                               <label htmlFor="Description">Description<em>*</em></label>
                               <p>Décrir les activitées de l'évènement. <br/> Ne pas dépasser 150 mots</p>  
                                                            
                               <textarea name="description"  onChange={this.changeDescriptionHandler}></textarea>
                                                       
                               </div> 

                           </form>
                       </div>
                       <br></br>
                                <p id="ErrorMessage" className="ErrorMessage" ></p>
                                <button className="btn btn-success" onClick={this.save} >Save</button>
                                <br></br>
                               <Link to={"/evenement"} className="btn btn-danger">Cancel</Link><br></br>

                </div>

            </div>
        </div>
    </div>
     
    );
  }
}

