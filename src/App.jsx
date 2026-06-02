import { useState } from "react";
import "./styles/style.css";

import Panier from "./components/Panier";
import Hero from "./components/Hero";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Commande from "./pages/Commande";
import Menus from "./pages/Menus";
import Desserts from "./pages/Desserts";
import Boissons from "./pages/Boissons";

function App() {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    const produitExiste = panier.find((item) => item.id === produit.id);

    if (produitExiste) {
      setPanier(
        panier.map((item) =>
          item.id === produit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setPanier([...panier, { ...produit, quantity: 1 }]);
    }
  };

  const retirerDuPanier = (id) => {
    setPanier(
      panier
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const supprimerDuPanier = (id) => {
    setPanier(panier.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Header panier={panier} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <footer className="heroFooter">
                <h2>
                  Neo<span>Food</span>
                </h2>
                <p>© 2026 NeoFood - Tous droits réservés</p>
              </footer>
            </>
          }
        />

        <Route
          path="/commande"
          element={<Commande ajouterAuPanier={ajouterAuPanier} />}
        />

        <Route
          path="/menus"
          element={<Menus ajouterAuPanier={ajouterAuPanier} />}
        />

        <Route
          path="/desserts"
          element={<Desserts ajouterAuPanier={ajouterAuPanier} />}
        />

        <Route
          path="/boissons"
          element={<Boissons ajouterAuPanier={ajouterAuPanier} />}
        />

        <Route
          path="/panier"
          element={
            <Panier
              panier={panier}
              ajouterAuPanier={ajouterAuPanier}
              retirerDuPanier={retirerDuPanier}
              supprimerDuPanier={supprimerDuPanier}
            />
          }
        />

        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;