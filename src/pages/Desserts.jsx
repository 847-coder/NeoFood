function Desserts({ ajouterAuPanier }) {

    const desserts = [

        {
            id: 1,
            texte: "Tiramisu",
            prix: 3.99,
        },

        {
            id: 2,
            texte: "Glace",
            prix: 2.99,
        },

        {
            id: 3,
            texte: "Crêpe",
            prix: 4.99,
        },
    ];

    return (

        <div className="menuPage">

            {desserts.map((produit) => (

                <section className="cardMenu" key={produit.id}>

                    <h2>{produit.texte}</h2>

                    <p>{produit.prix} €</p>

                    <button
                        onClick={() => ajouterAuPanier(produit)}
                    >
                        Ajouter au panier
                    </button>

                </section>

            ))}

        </div>
    );
}

export default Desserts;