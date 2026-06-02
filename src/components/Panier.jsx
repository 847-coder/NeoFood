function Panier({ panier, ajouterAuPanier, retirerDuPanier, supprimerDuPanier }) {
  const total = panier.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="panierPage">
      <div className="panierHero">
        <h1>Votre Panier</h1>
        <p>Vérifiez vos articles et validez votre commande.</p>
      </div>

      <div className="panierLayout">
        <div className="panierArticles">
          <h2>Articles dans votre panier</h2>

          {panier.length === 0 ? (
            <p className="panierVide">Votre panier est vide.</p>
          ) : (
            panier.map((item) => (
              <div className="panierCard" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="panierInfos">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <strong>{item.price.toFixed(2)} €</strong>
                </div>

                <div className="panierActions">
                  <div className="quantityControls">
                    <button onClick={() => retirerDuPanier(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => ajouterAuPanier(item)}>+</button>
                  </div>

                  <button
                    className="deleteBtn"
                    onClick={() => supprimerDuPanier(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="panierResume">
          <h2>Récapitulatif</h2>

          <div className="resumeLine">
            <span>Sous-total</span>
            <strong>{total.toFixed(2)} €</strong>
          </div>

          <div className="resumeLine">
            <span>Livraison</span>
            <strong>2.00 €</strong>
          </div>

          <div className="resumeTotal">
            <span>Total</span>
            <strong>{(total + 2).toFixed(2)} €</strong>
          </div>

          <button className="checkoutBtn">
            Valider la commande
          </button>

          <p className="secureText">Paiement 100% sécurisé</p>
        </div>
      </div>
    </div>
  );
}

export default Panier;