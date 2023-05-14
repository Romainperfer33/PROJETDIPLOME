import "./loging.css"
import { useNavigate } from "react-router-dom";


// const LoginForm = () => {
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log("here", event.target.username.value);

//         const username = event.target.username.value;
//         const password = event.target.password.value;

//         fetch("http://localhost:3000/api/users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // j'envoie dans le corps de la requête POST
//       // les données du formulaire
//       // formattées en JSON
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     })
   
//       // le serveur express me renvoie un JWT
//       // si les infos sont valides (username et password
//       // correspondent à un utilisateur en BDD)
//       .then((responseJson) => {
//         return responseJson.json();
//       })
//       // je stocke le JWT dans le localStorage
//       // pour pouvoir l'utiliser dans toutes les requêtes
//       // vers mon API qui nécessitent une authenfication
//       .then((responseJs) => {
//         const jwt = responseJs.token;

//         localStorage.setItem("jwt", jwt);
//       });
//   };


const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((responseJson) => {
        return responseJson.json();
      })
      .then((responseJs) => {
        
        const jwt = responseJs.token;
        const userRole = responseJs.user.roles; // Récupération du rôle d'utilisateur dans la réponse

        localStorage.setItem("jwt", jwt);
        localStorage.setItem("userRole", userRole); // Stockage du rôle d'utilisateur dans le localStorage
      })
      .then(() => {
        const userRole = localStorage.getItem("userRole");

        if (userRole === "admin") { // Vérification du rôle d'utilisateur avant de rediriger vers le composant restreint
          navigate("/admin/create-stage");
        } else {
          navigate("/stages");
        }
      });
  };

    

    return (
    <form onSubmit={handleSubmit}>
        <div className="cover">
            <div className="logingmock">
                <p className="logintitle">Loging</p>
                <input className="userlog" type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />

                <div className="login-btn" >
                    <button className="btnloging">ENTER</button>
                </div>
            </div>
        </div>
    </form>
    )
}

export default LoginForm