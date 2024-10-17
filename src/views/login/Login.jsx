import "./login.css"

const Login = () => {
    return (
        <div>
            <div className="decoracion">
                <h1>BIENVENIDO DE NUEVO <br /> AL MUNDO FITNESS</h1>
            </div>
            <div className="principal">
                <img style={{ filter: "blur(3px)" }} width="100%" src="C:\Users\sinse\Documents\REPOSITORIO_WEB\fitfortress-frontend\src\views\login\img\Gimnasio-aparatos.webp" alt="Gimnasio Aparatos" />
                <div className="datos">
                    <button className="ingresar" type="button">Ingresar</button>
                    <button className="registrar" type="button">Registrar</button>
                    <div className="ff">
                        <br />
                        <img className="favicon" src="C:\Users\sinse\Documents\REPOSITORIO_WEB\fitfortress-frontend\src\views\login\img\FF.ico" alt="Favicon" />
                    </div>
                    <div className="ff">
                        <form>
                            <b>Ingrese su usuario:</b>
                            <br /><br />
                            <input className="input" type="text" placeholder="Usuario" />
                            <br />
                            <b>Ingrese su contraseña:</b>
                            <br /><br />
                            <input className="input" type="password" placeholder="Contraseña" />
                            <br /><br />
                            <button className="log" type="reset">INGRESAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;