function Panier(props) {

    const total = props.panier.reduce((acc, produit) => {
        return acc + produit.prix * produit.quantite;
    }, 0);

    return (

        <section className="panier">

            <h2>Panier</h2>

            {props.panier.map((produit, index) => (

                <div key={index} className="panierItem">

                    <p>
                        {produit.texte} - {produit.prix} €
                    </p>

                    <div className="quantityControls">

                        <button
                            onClick={() => props.supprimerDuPanier(index)}
                        >
                            🗑️
                        </button>

                        <span>{produit.quantite}</span>

                        <button
                            onClick={() => props.augmenterQuantite(produit.texte)}
                        >
                            +
                        </button>

                    </div>

                </div>

            ))}

            <h3>Total : {total.toFixed(2)} €</h3>

        </section>

    );
}

export default Panier;