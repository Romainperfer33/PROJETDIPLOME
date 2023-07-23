
import './createStage.css'
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

const CreateStage = () => {

  const [error_class, setErrorClass] = useState("hidden")
  const [isError, setIsError] = useState(false)
  // je créé un event listener quand le formulaire est validé
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur

    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    
    const intitule = event.target.intitule.value;
    const descriptif = event.target.descriptif.value;
    const places = event.target.places.value;
    const prix = event.target.prix.value;
    const image = event.target.image.value;
    const date_debut = event.target.date_debut.value;

    fetch("http://localhost:3000/api/stages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intitule: intitule,
        descriptif: descriptif,
        places: places,
        prix: prix,
        image: image,
        date_debut: date_debut,
      }),

      // si l'api renvie une reponse 200
      // ça veut dire que tout s'est bien passé
      // alors on affiche un message dans la console
    }).then((response) => {
      if (response.status === 200) {
        setIsError(false)
        setErrorClass('hidden')
        navigate("/stages");
        // sinon on affiche un message d'erreur
        // car cela veut dire que le stage n'a pas été créé
      } else {
        setIsError(true)
        setErrorClass('error')
      }
    });
  };

  return (
<div className="cover">
      <form onSubmit={handleSubmit} className='createmock'>
        <div>
          <label htmlFor="name">Intitule</label>
          <input type="text" name="intitule" />
        </div>
        <div>
          <label htmlFor="superficy">Descriptif</label>
          <input type="text" name="descriptif" />
        </div>
        <div>
          <label htmlFor="capacity">Places</label>
          <input type="number" name="places" />
        </div>

        <div>
          <label htmlFor="priceDay">Prix</label>
          <input type="number" name="prix" />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" alt=""/>
        </div>

        <div>
          <label htmlFor="dateDebut">Date de Debut</label>
          <input type="date" name="date_debut"  />
        </div>

        <button type="submit" className='btncreate'>Créer le stage</button>
      </form>
        <p className={error_class}>Une erreur est survenue</p>
</div>
  );
};

export default CreateStage;