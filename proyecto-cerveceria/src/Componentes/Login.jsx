import "../css/iniciar_sesion_styles.css";
import { useNavigate } from 'react-router-dom';

export default function Iniciosesion(){
    const navigate = useNavigate();

    const manejarClick = () => {
        navigate('/Registro');
    };
    return(
        <section className="cuerpo">
            <form className="formulario" action="">
                <h2> LOGIN </h2>
                <label htmlFor=""> Usuario </label>
                <input type="text" />
                <label htmlFor=""> Contraseña </label>
                <input type="password" />
                <p> ¿ No tienes una cuenta ? <button onClick={manejarClick}><span>Resgistrate</span></button> </p>
                <button className="ingresar_login"> Ingresar </button>
            </form>
            
        </section>
    );
}