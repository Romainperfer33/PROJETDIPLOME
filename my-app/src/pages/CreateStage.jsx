
import './createStage.css'
import { useNavigate } from "react-router-dom";

const CreateStage = () => {
  // je créé un event listener quand le formulaire est validé
  const navigate = useNavigate();
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
        navigate("/stages");
        // sinon on affiche un message d'erreur
        // car cela veut dire que le stage n'a pas été créé
      } else {
        console.log("erreur");
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
</div>
  );
};

export default CreateStage;