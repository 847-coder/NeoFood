function Menus({ ajouterAuPanier }) {

    const menus = [

        {
            id: 1,
            texte: "Burger",
            prix: 9.99,
        },

        {
            id: 2,
            texte: "Tacos",
            prix: 8.99,
        },

        {
            id: 3,
            texte: "Wrap",
            prix: 7.99,
        },
    ];

    return (

        <div className="menuPage">

            {menus.map((produit) => (

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

export default Menus;