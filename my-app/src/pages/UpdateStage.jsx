import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './updateStage.css'


const UpdateStage = () => {

  const [stage, setStage] = useState(null);
  const { id } = useParams();
 

  useEffect(() => {
    fetch(`http://localhost:3000/api/stages/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {

        setStage(responseJs.data);
      });
  }, [id]);


  const handleSubmit = (event) => {

    event.preventDefault();

    const intitule = event.target.intitule.value;
    const descriptif = event.target.descriptif.value;
    const places = event.target.places.value;
    const prix = event.target.prix.value;
    const image = event.target.image.value;
    const date_debut = event.target.date_debut.value;

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


    }).then((response) => {
      if (response.status === 200) {
        console.log("stage modifié");

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
          <textarea type="text" name="descriptif" className="descriptiftext" defaultValue={stage.descriptif}/>
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