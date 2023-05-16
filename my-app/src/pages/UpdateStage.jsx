import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './updateStage.css'


const UpdateStage = () => {
  // je créé un state pour stocker un coworking
  const [stage, setStage] = useState(null);
 

  // je récupère l'id présent dans l'url
  const { id } = useParams();
 

  // j'utilise useEffect, pour executer l'appel à l'api
  // une seule fois, au chargement du composant
  useEffect(() => {
    // je fais un appel fetch, vers l'url de l'api pour récupérer
    //  un coworking en fonction de l'id présent dans l'url
    fetch(`http://localhost:3000/api/stages/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        // si j'ai une réponse de l'api, je stocke le coworking
        // renvoyé dans le state
        setStage(responseJs.data);
      });
  }, [id]);

  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // et on les stocke dans des variables
    const intitule = event.target.intitule.value;
    const descriptif = event.target.descriptif.value;
    const places = event.target.places.value;
    const prix = event.target.prix.value;
    const image = event.target.image.value;
    const date_debut = event.target.date_debut.value;

    // on fait un appel vers l'API (express)
    // on lui spécifie la méthode POST (pour créer)
    // et on lui passe en "body" les données du formulaire
    // attention, il faut que les données soient au format JSON
    // donc on utilise JSON.stringify
    // il faut que les donnnées envoyées correspondent
    // à ce qui est attendu par l'API
    fetch(`http://localhost:3000/api/stages/${id}`, {
      method: "PUT",
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
        console.log("stage modifié");
        // sinon on affiche un message d'erreur
        // car cela veut dire que le coworking n'a pas été créé
      } else {
        console.log("erreur");
      }
    });
  };

  return (
    <div className="cover">
      {stage ? (
        <div className="updatemock">
          <h1 className="logintitle">Mise à jour du stage : <br></br> {stage.intitule}</h1>
          <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Intitule</label>
          <input type="text" name="intitule"defaultValue={stage.intitule}/>
        </div>
        <div>
          <label htmlFor="descriptif">Descriptif</label>
          <textarea type="text" name="descriptif"  defaultValue={stage.descriptif}/>
        </div>
        <div>
          <label htmlFor="capacity">Places</label>
          <input type="number" name="places" defaultValue={stage.places} />
        </div>

        <div>
          <label htmlFor="priceDay">Prix</label>
          <input type="number" name="prix" defaultValue={stage.prix}/>
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" alt="" defaultValue={stage.image}/>
        </div>

        <div>
          <label htmlFor="dateDebut">Date de Debut</label>
          <input type="date" name="date_debut" defaultValue={stage.date_debut.split("T")[0]} />
        </div>

        <button type="submit" className="btnupdate">Mettre à jour le coworking</button>
        </form>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default UpdateStage;