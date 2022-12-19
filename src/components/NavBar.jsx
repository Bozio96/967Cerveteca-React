import "./styles/navBar.css"
import {Brand} from "./Brand"
import {CartWidget} from "./CartWidget"
import {Botones} from "./Botones"
export function NavBar(){
    return (
        <nav className="nav">
            <Brand/>
            <Botones/>
            <CartWidget/>
        </nav>
    )
}