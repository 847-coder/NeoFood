function Boissons({ ajouterAuPanier }) {

    const boissons = [

        {
            id: 1,
            texte: "Coca",
            prix: 1.99,
        },

        {
            id: 2,
            texte: "Fanta",
            prix: 1.99,
        },

        {
            id: 3,
            texte: "Eau",
            prix: 0.99,
        },
    ];

    return (

        <div className="menuPage">

            {boissons.map((produit) => (

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

export default Boissons;