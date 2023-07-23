
import './inscription.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Inscription = () => {
  // je créé un event listener quand le formulaire est validé
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const handleSubmit = (event) => {

    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username || !password) {
      setIsError(true);
      return; // Sortir de la fonction si un champ est manquant
    }
    fetch("http://localhost:3000/api/users/inscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
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
    <form onSubmit={handleSubmit}>
        <div className="cover">
            <div className="inscriptionmock">
                <p className="inscripttitle">Inscription</p>
                <input className="userinscription" type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />

                    <button className="btnloging">ENTER</button>
            </div>
            {isError && <p className="error">Veuillez remplir tous les champs</p>}
        </div>
    </form>
    )
}

export default Inscription;


