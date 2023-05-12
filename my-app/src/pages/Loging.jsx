import "./loging.css"


const LoginForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        fetch()
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="cover">
            <div className="logingmock">
                <p className="logintitle">Loging</p>
                <input className="userlog" type="text" placeholder="username" />
                <input type="password" placeholder="password" />

                <div className="login-btn" >
                    <button className="btnloging">ENTER</button>
                </div>
            </div>
        </div>
    </form>
    )
}

export default LoginForm