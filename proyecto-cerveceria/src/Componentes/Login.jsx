import { Link } from "react-router-dom";
import "../css/iniciar_sesion_styles.css";

export default function Iniciosesion(){
    return(
        <section className="cuerpo">

            <form className="formulario" action="">
                <h2> LOGIN </h2>
                <label htmlFor=""> Usuario </label>
                <input type="text" />
                <label htmlFor=""> Contraseña </label>
                <input type="password" />
                <p> ¿ No tienes una cuenta ? <Link to="/Resgitro"><span>Resgistrate</span></Link> </p>
                <button className="ingresar"> Ingresar </button>
            </form>
            
        </section>
    );
}