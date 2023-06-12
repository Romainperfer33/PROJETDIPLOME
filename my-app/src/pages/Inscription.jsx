
import './createStage.css'
import { useNavigate } from "react-router-dom";

const Inscription = () => {
  // je créé un event listener quand le formulaire est validé
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur

    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // et on les stocke dans des variables
    
    const username = event.target.username.value;
    const password = event.target.password.value;

    // on fait un appel vers l'API (express)
    // on lui spécifie la méthode POST (pour créer)
    // et on lui passe en "body" les données du formulaire
    // attention, il faut que les données soient au format JSON
    // donc on utilise JSON.stringify
    // il faut que les donnnées envoyées correspondent
    // à ce qui est attendu par l'API
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

                <div className="inscription-btn" >
                    <button className="btnloging">ENTER</button>
                </div>
            </div>
        </div>
    </form>
    )
}

export default Inscription;