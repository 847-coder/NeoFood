import "../style.css";
import { Link } from "react-router-dom";

function Header({ panier }) {
    return (
        <header>
            <h1 className="titleHeader">NeoFood</h1>

            <div className="nav">
                <Link to="/">Accueil</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/panier">Panier : {panier.length}</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    );
}

export default Header;