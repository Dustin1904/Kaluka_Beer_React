

export default function Registro(){
    return(
        <section className="cuerpo">

            <form className="formulario" action="">
                <h2> LOGIN </h2>
                <label htmlFor=""> Usuario </label>
                <input type="text" />
                <label htmlFor=""> Contraseña </label>
                <input type="password" />
                
                <button className="ingresar"> Ingresar </button>
            </form>
            
        </section>
    );
}