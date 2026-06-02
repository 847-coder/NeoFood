import tiramisu from "../assets/tiramisu.png";
import glace from "../assets/glace.png";
import crepe from "../assets/crepe.png";

const desserts = [
  {
    id: "dessert-tiramisu",
    name: "Tiramisu",
    price: 3.99,
    image: tiramisu,
    description: "Dessert italien crémeux au café."
  },

  {
    id: "dessert-glace",
    name: "Glace",
    price: 2.99,
    image: glace,
    description: "Glace onctueuse au choix."
  },

  {
    id: "dessert-crepe",
    name: "Crêpe",
    price: 4.99,
    image: crepe,
    description: "Crêpe gourmande au chocolat.",
    large: true
  }
];

function Desserts({ ajouterAuPanier }) {

  return (

    <div className="dessertPage">

      <div className="dessertLayout">

        <aside className="dessertHero">

          <h1>Nos Desserts</h1>

          <p>
            Des desserts gourmands préparés chaque jour.
          </p>

          <div className="dessertIcon">
            🍰
          </div>

        </aside>

        <div className="dessertGrid">

          {desserts.map((dessert) => (

            <div
              className={
                dessert.large
                  ? "dessertCard dessertCardLarge"
                  : "dessertCard"
              }

              key={dessert.id}
            >

              <img
                src={dessert.image}
                alt={dessert.name}
              />

              <div className="dessertCardContent">

                <h2>{dessert.name}</h2>

                <p>{dessert.description}</p>

                <strong>
                  {dessert.price.toFixed(2)} €
                </strong>

                <button
                  onClick={() => ajouterAuPanier(dessert)}
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

export default Desserts;