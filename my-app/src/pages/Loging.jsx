import "./loging.css"


const LoginForm = () => {

    return (
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
    )
}

export default LoginForm