import burger from "../assets/burger.png";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="text" >
                Commandez ce que vous aimez
                immédiatement

                <Link to="/menu" className="buttonHero">
                    Commander maintenant
                </Link>
            </div>

            <div className="image">
                <img src={burger} alt="burger" />
            </div>

        </section>
    )
}

export default Hero;


