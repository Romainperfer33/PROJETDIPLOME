import './stages.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom'
import Nav from '../layout/Nav'



const Stages = () => {
  const userRole = localStorage.getItem("userRole");

  const [stageData, setStageData] = useState([]);
  const navigate = useNavigate();

  let iserror = false;

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
        iserror = true;
        error = "Une erreur est survenue"
      });
  };

  


  return (
    <div className='stagepage'>
      <div className='stagenavtitle'>
        <div>
        <p className='stagepagetitle'>TFA</p>
        <p className='stagepagetitle'>STAGES</p>
        </div>
        <Nav/>
      </div>

      <div className='stageintroduce'>
        {stageData.map((stage) => {
          return (
            <div key={stage.id}>
              <div className='stagepresentation'>
                <div className='blueline'>
                  <h2 className='stagetitle'>{stage.intitule}</h2>
                  {userRole === "admin" && (
                <Link to="/admin/create-stage" className='link-stage'>Créer un stage</Link>
              )}
                  {userRole === "admin" && (
                <Link to={{
                    pathname: `/admin/update-stage/${stage.id}`
                  }}
                  className='link-stage'>Update un stage</Link> 
              )}
                  {userRole === "admin" && (
                    <h3 className='idstage'>Identifiant : {stage.id}</h3>
                  )}
                  </div>
              </div>
              
              {userRole === "admin" && (
                <button onClick={() => handleDeleteClick(stage)} className='delete-stage'>Supprimer le stage</button>
              )}

          
            </div>
          );
        })}
        </div>
      </div>
  );
}

export default Stages;
