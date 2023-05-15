import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './deleteStage.css'

const StageList = () => {
  // créé un state coworkingsData pour pouvoir stocker les données récupérées
  // depuis l'API, à savoir la liste des coworkings
  // par défaut (donc au premier chargement du composant), le state
  // contient un tableau vide
  const [stageData, setStageData] = useState([]);

  // je récupère la fonction navigate du react router
  const navigate = useNavigate();

  // je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des coworkings en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger

  useEffect(() => {
    fetch("http://localhost:3000/api/stages")
      .then((stageDataJson) => {
        return stageDataJson.json();
      })
      .then((stageDataJs) => {
        setStageData(stageDataJs.data);
      });
  }, []);

  const handleDeleteClick = (stage) => {
    const token = localStorage.getItem("jwt");
 
    
    

    // je fais un appel fetch vers l'url de mon api avec la méthode DELETE
    // et je passe l'id du coworking à supprimer en paramètre de l'url
    fetch("http://localhost:3000/api/stages/" + stage.id, {
      method: "DELETE",
      // si l'url de mon api nécessite une authentification
      // je lui passe le JWT stocké en localStorage dans le header
      // de la requête
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      // quand le fetch est terminé, je recharge la page actuelle grâce
      // à la fonction navigate du react router
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="stagedelete">
      <h1>STAGE</h1>

      {/* 
        je boucle sur le state coworkingsData, qui contient la liste des coworkings 
      */}
      {stageData.map((stage) => {
        return (
          <div key={stage.id}>
            <h2>{stage.intitule}</h2>
            <p>Place : {stage.descriptif}</p>

            {/* 
              Je créé un lien (grâce au react router)
              vers la page de détail du coworking
              et je lui passe en parametre l'id du coworking actuel
            */}
            {/* <Link to={`/admin/coworkings/${coworking.id}`}>Voir le coworking</Link>
            <Link to={`/admin/coworkings/${coworking.id}/update`}>modifier le coworking</Link> */}

            {/* 
               créé un bouton avec un event listener
               passe le coworking actuel en paramètre de la fonction handleDeleteClick
              */}

            <button onClick={() => handleDeleteClick(stage)}>Supprimer le stage</button>
          </div>
        );
      })}
    </div>
  );
};

export default StageList;

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const StageList = () => {
//   const [stageData, setStageData] = useState(null);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3000/api/stages`)
//       .then((response) => response.json())
//       .then((data) => setStageData(data.data))
//       .catch((error) => console.log(error));
//   }, [id]);

//   const handleDeleteClick = () => {
//     const token = localStorage.getItem("jwt");

//     fetch(`http://localhost:3000/api/stages`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(() => {
//         navigate(0);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // Récupérez le stage actuel dans currentStage
//   const currentStage = stageData;

//   return (
//     <div>
//       {currentStage ? (
//         <div className="stage-details">
//           <h1 className="stagetitle">Détail du stage</h1>
//           <div className="content-details">
//             <h2 className="stage intitule">{currentStage.intitule}</h2>
//             <p>Descriptif : {currentStage.descriptif}</p>
//             <p>Places : {currentStage.places}</p>
//             <p>Prix : {currentStage.prix}</p>
//             <p>image : {currentStage.image}</p>
//             <p>Date de debut : {currentStage.date_debut}</p>

//             <div className="ticket-content">
//               <button className="btn" onClick={handleDeleteClick}>
//                 Supprimer le stage
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Le stage a bien été supprimé</p>
//       )}
//     </div>
//   );
// };

// export default StageList;
