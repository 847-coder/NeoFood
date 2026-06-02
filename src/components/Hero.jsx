import burger from "../assets/burger.png";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <section className="hero">

                <div className="heroText">
                    <p className="heroSubtitle">
                        FAST FOOD NOUVELLE GÉNÉRATION
                    </p>

                    <h1>
                        Commandez ce que vous aimez immédiatement
                    </h1>

                    <p className="heroDescription">
                        Des burgers gourmands, frais et préparés à la commande.
                    </p>

                    <div className="heroButtons">

                        <Link to="/menus" className="btnPrimary">
                            Commander maintenant
                        </Link>

                        <Link to="/panier" className="btnSecondary">
                            Voir le panier
                        </Link>

                    </div>
                </div>

                <div className="heroImage">
                    <img src={burger} alt="Burger NeoFood" />
                </div>

            </section>

            <section className="features">

                <div className="featureCard">
                    <h3>Frais</h3>
                    <p>Des ingrédients sélectionnés chaque jour.</p>
                </div>

                <div className="featureCard">
                    <h3>Rapide</h3>
                    <p>Votre commande prête en quelques minutes.</p>
                </div>

                <div className="featureCard">
                    <h3>Click & Collect</h3>
                    <p>Commandez en ligne et récupérez sur place.</p>
                </div>

            </section>
        </>
    );
}

export default Hero;