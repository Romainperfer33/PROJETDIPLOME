import './stages.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom'


const Stages = () => {
  const userRole = localStorage.getItem("userRole");

  const [stageData, setStageData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/stages")
      .then((stageDataJson) => stageDataJson.json())
      .then((stageDataJs) => {
        setStageData(stageDataJs.data);
      });
  }, []);

  const handleDeleteClick = (stage) => {
    const token = localStorage.getItem("jwt");

    fetch("http://localhost:3000/api/stages/" + stage.id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  


  return (
    <div className='stagepage'>
      <div className='stagenavtitle'>
        <p className='stagepagetitle'>TFA</p>
        <p className='stagepagetitle'>STAGES</p>
      </div>

      <div className='stageintroduce'>
        {stageData.map((stage) => {
          return (
            <div key={stage.id}>
              <div className='stagepresentation'>
                <div className='blueline'>
                  <h2 className='stagetitle'>{stage.intitule}</h2>
                  {userRole === "admin" && (
                    <h2 className='stagelink'>Identifiant : {stage.id}</h2>
                  )}
                </div>
              </div>

              {userRole === "admin" && (
                <button onClick={() => handleDeleteClick(stage)}>Supprimer le stage</button>
              )}
              {userRole === "admin" && (
                <Link to="/admin/create-stage" className='create-stage-button'>Créer un stage</Link>
              )}
              {userRole === "admin" && (
                  <Link to={{
                    pathname: `/admin/update-stage/${stage.id}`
                  }}
                  className='create-stage-button'>Update un stage</Link> 
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stages;
