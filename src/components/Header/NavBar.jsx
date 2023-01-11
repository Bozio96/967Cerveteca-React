import {CartWidget} from "./CartWidget"
import {NavLink, Link} from 'react-router-dom';

export function NavBar(){
    const logo = "https://res.cloudinary.com/dnfil5isx/image/upload/v1662515798/imagenes/logo_k84eyr.png";
    return (
        <nav className="nav">
            <div className="logoYtitulo">
                <Link to="/"><img className="logo" src={logo} alt="Logo de 967"/></Link>
                <Link to="/"><h2 className="titulo">967-Cerveteca</h2></Link>
            </div>

            <ul className="btn-container">
                <li className="btn">
                    <NavLink to="/categoria/cervezas">Cervezas</NavLink>
                </li>
                <li className="btn">
                    <NavLink to="/categoria/vinos">Vinos</NavLink> 
                </li>
                <li className="btn">
                    <NavLink to="/categoria/espumantes">Espumantes</NavLink> 
                </li>
            </ul>
        
            <Link to= "/carrito">
                <CartWidget/>
            </Link>
        </nav>
    )
}