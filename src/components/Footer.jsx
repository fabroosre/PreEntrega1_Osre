import "./Footer.css"

function Footer() {
    return (
        <div>
<footer>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h3>Contacto</h3>
                <p>Dirección: Av. La Década Ganada 2015</p>
                <p>Teléfono: 0297-44571147</p>
                <p>Correo electrónico: nosrobamosunpbi@lta.com</p>
            </div>
            <div className="col-md-8">
                <h3>Compañero, Seguí Nuestras Redes</h3>
                <ul className="social">
                    <li><a href="https://www.instagram.com/cgt.ok/" target="_blank">Seguinos en Instagram</a></li>
                    <li><a href="https://www.facebook.com/lacamporaok/?locale=es_LA" target="_blank">Seguinos en Facebook</a></li>
                    <li><a href="https://twitter.com/maximokirchnier?lang=es" target="_blank">Seguinos en Twitter</a></li>
                    <li><a href="https://www.youtube.com/@c5n" target="_blank">Seguinos en YouTube</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
        </div>
    )
}
export default Footer;
