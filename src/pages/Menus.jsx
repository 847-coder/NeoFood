
import { Link } from "react-router-dom";

import burger from "../assets/burger.png";
import dessert from "../assets/dessert.png";
import boisson from "../assets/boisson.png";
import cloche from "../assets/cloche.png";


function Menu() {
    return (
        <div className="menuContainer">
            <img src={cloche} alt="" className="clocheIcon" />

            <div className="menuTop">
                <h1>Notre Menu</h1>
                <div className="menuLine">—— 🍽️ ——</div>
                <p>
                    Découvrez nos menus, desserts et boissons <br />
                    préparés avec des ingrédients frais et de qualité.
                </p>
            </div>

            <div className="menuGrid">
                <div className="menuCard">
                    <h2>Menus</h2>
                    <span></span>
                    <p>Des plats savoureux et des formules complètes pour tous les goûts.</p>
                    <img src={burger} alt="Burger" />
                    <Link to="/commande" className="menuBtn">Voir ›</Link>
                </div>

                <div className="menuCard">
                    <h2>Desserts</h2>
                    <span></span>
                    <p>Des douceurs sucrées pour finir votre repas en beauté.</p>
                    <img src={dessert} alt="Dessert" />
                    <Link to="/desserts" className="menuBtn">Voir ›</Link>
                </div>

                <div className="menuCard">
                    <h2>Boissons</h2>
                    <span></span>
                    <p>Des boissons fraîches et variées pour vous rafraîchir.</p>
                    <img src={boisson} alt="Boisson" />
                    <Link to="/boissons" className="menuBtn">Voir ›</Link>
                </div>
            </div>

            <footer className="menuFooter">
                <h2>Neo<span>Food</span></h2>

                <div>
                    <strong>📍 Adresse</strong>
                    <p>123 Rue de la Gastronomie<br />75000 Paris, France</p>
                </div>

                <div>
                    <strong>📞 Téléphone</strong>
                    <p>01 23 45 67 89</p>
                </div>

                <div>
                    <strong>✉️ Email</strong>
                    <p>contact@neofood.com</p>
                </div>

                <div>
                    <strong>Suivez-nous</strong>
                    <p>● ● ●</p>
                </div>
            </footer>
        </div>
    );
}

export default Menu;




