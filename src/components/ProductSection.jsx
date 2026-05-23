function ProductSection(props) {

    return (

        <section>

            <h2>{props.title}</h2>

            <div>

                {props.produits.map((produit) => (

                    <div key={produit.id}>

                        <p>
                            {produit.texte} - {produit.prix} €
                        </p>

                        <button onClick={() => props.ajouterAuPanier(produit)}>
                            Ajouter
                        </button>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default ProductSection;