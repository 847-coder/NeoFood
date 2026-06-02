import coca from "../assets/coca.png";
import fanta from "../assets/fanta.png";
import eau from "../assets/eau.png";

const boissons = [
  {
    id: "boisson-coca",
    name: "Coca Cola",
    price: 1.99,
    image: coca,
    description: "Boisson fraîche pétillante."
  },

  {
    id: "boisson-fanta",
    name: "Fanta",
    price: 1.99,
    image: fanta,
    description: "Boisson fruitée et rafraîchissante."
  },

  {
    id: "boisson-eau",
    name: "Eau",
    price: 0.99,
    image: eau,
    description: "Eau fraîche en bouteille.",
    large: true
  }
];

function Boissons({ ajouterAuPanier }) {

    return (

        <div className="boissonPage">

            <div className="boissonLayout">

                <aside className="boissonHero">

                    <h1>Nos Boissons</h1>

                    <p>
                        Des boissons fraîches pour accompagner votre menu.
                    </p>

                    <div className="boissonIcon">
                        🥤
                    </div>

                </aside>

                <div className="boissonGrid">

                    {boissons.map((boisson) => (

                        <div
                            className={
                                boisson.large
                                    ? "boissonCard boissonCardLarge"
                                    : "boissonCard"
                            }

                            key={boisson.id}
                        >

                            <img
                                src={boisson.image}
                                alt={boisson.name}
                            />

                            <div className="boissonCardContent">

                                <h2>{boisson.name}</h2>

                                <p>{boisson.description}</p>

                                <strong>
                                    {boisson.price.toFixed(2)} €
                                </strong>

                                <button
                                    onClick={() => ajouterAuPanier(boisson)}
                                >
                                    Ajouter au panier
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default Boissons;