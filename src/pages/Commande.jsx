import burger from "../assets/burger.png";
import tacos from "../assets/tacos.png";
import wrap from "../assets/wrap.png";

const produits = [
  {
    id: "menu-burger",
    name: "Neo Burger",
    price: 10.9,
    image: burger,
    description: "Burger gourmand avec cheddar fondant."
  },

  {
    id: "menu-tacos",
    name: "Tacos",
    price: 8.9,
    image: tacos,
    description: "Tacos généreux avec sauce maison."
  },

  {
    id: "menu-wrap",
    name: "Wrap Crispy",
    price: 7.9,
    image: wrap,
    description: "Wrap croustillant et frais.",
    large: true
  }
];

function Commande({ ajouterAuPanier }) {
    return (
        <div className="commandePage">
            <div className="commandeLayout">
                <aside className="commandeHero">
                    <h1>Votre Commande</h1>

                    <p>
                        Commandez rapidement vos produits préférés.
                    </p>

                    <div className="commandeIcon">
                        🛍️
                    </div>
                </aside>

                <div className="commandeGrid">
                    {produits.map((produit) => (
                        <div
                            className={
                                produit.large
                                    ? "commandeCard commandeCardLarge"
                                    : "commandeCard"
                            }
                            key={produit.id}
                        >
                            <img src={produit.image} alt={produit.name} />

                            <div className="commandeCardContent">
                                <h2>{produit.name}</h2>

                                <p>{produit.description}</p>

                                <strong>{produit.price.toFixed(2)} €</strong>

                                <button onClick={() => ajouterAuPanier(produit)}>
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

export default Commande;