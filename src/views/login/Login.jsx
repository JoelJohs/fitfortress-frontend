import "./styles/ChatBot.css";

const Login = () => {
    return (
        <div>
            <div className="decoracion">
                <h1>BIENVENIDO DE NUEVO <br /> AL MUNDO FITNESS</h1>
            </div>
            <div className="principal">
                <img style={{ filter: "blur(3px)" }} width="100%" src="/login_assets/Gimnasio-aparatos.png" alt="Gimnasio Aparatos" />
                <div className="datos">
                    <button className="ingresar" type="button">Ingresar</button>
                    <button className="registrar" type="button">Registrar</button>
                    <div className="ff">
                        <br />
                        <img className="favicon" src="/login_assets/FF.ico" alt="Favicon" />
                    </div>
                    <div className="ff">
                        <form>
                            <b>Ingrese su usuario:</b>
                            <br /><br />
                            <input className="input" type="text" placeholder="Usuario"/>
                            <br />
                            <b>Ingrese su contraseña:</b>
                            <br /><br />
                            <input className="input contraseña" type="password" placeholder="Contraseña" />
                            <br /><br />
                            <button className="log" type="submit">INGRESAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
