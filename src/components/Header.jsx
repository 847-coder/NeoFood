import { Link } from "react-router-dom";

function Header({ panier }) {

  return (

    <header>

      <h1 className="titleHeader">
        NeoFood
      </h1>

      <div className="nav">

        <Link to="/">
          Accueil
        </Link>

        <Link to="/menus">
          Menu
        </Link>

        <Link to="/panier">

          Panier : {

            panier.reduce(
              (acc, item) => acc + item.quantity,
              0
            )

          }

        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

    </header>

  );

}

export default Header;