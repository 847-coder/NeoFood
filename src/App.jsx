import { useState } from "react";
import "./style.css";

import Panier from "./components/Panier";
import Hero from "./components/Hero";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./pages/menu";
import Menus from "./pages/Menus";
import Desserts from "./pages/Desserts";
import Boissons from "./pages/Boissons";

function App() {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    const produitExiste = panier.find((item) => item.texte === produit.texte);

    if (produitExiste) {
      setPanier(
        panier.map((item) =>
          item.texte === produit.texte
            ? { ...item, quantite: item.quantite + 1 }
            : item
        )
      );
    } else {
      setPanier([...panier, { ...produit, quantite: 1 }]);
    }
  };

  const augmenterQuantite = (texteProduit) => {
    setPanier(
      panier.map((item) =>
        item.texte === texteProduit
          ? { ...item, quantite: item.quantite + 1 }
          : item
      )
    );
  };

  const diminuerQuantite = (texteProduit) => {
    setPanier(
      panier
        .map((item) =>
          item.texte === texteProduit
            ? { ...item, quantite: item.quantite - 1 }
            : item
        )
        .filter((item) => item.quantite > 0)
    );
  };

  const supprimerDuPanier = (indexASupprimer) => {
    setPanier(panier.filter((produit, index) => index !== indexASupprimer));
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

              <main>
                <Panier
                  panier={panier}
                  supprimerDuPanier={supprimerDuPanier}
                  augmenterQuantite={augmenterQuantite}
                  diminuerQuantite={diminuerQuantite}
                />
              </main>
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />

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
              supprimerDuPanier={supprimerDuPanier}
              augmenterQuantite={augmenterQuantite}
              diminuerQuantite={diminuerQuantite}
            />
          }
        />

        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;