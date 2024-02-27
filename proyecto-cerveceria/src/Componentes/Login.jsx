import "../css/iniciar_sesion_styles.css";

export default function Iniciosesion(){
    return(
        <section className="cuerpo">

            <form className="formulario" action="">
                <h2> LOGIN </h2>
                <label htmlFor=""> Usuario </label>
                <input type="text" />
                <label htmlFor=""> Contraseña </label>
                <input type="passord" />
                <p> ¿ No tienes una cuenta ? <span>Resgistrate</span></p>
                <button className="ingresar"> Ingresar </button>
            </form>
            
        </section>
    );
}