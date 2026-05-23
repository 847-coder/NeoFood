import { Link } from "react-router-dom";

function Menu() {
    return (

        <div className="menuPage">

            <section className="cardMenu">

                <h2>Menus</h2>

                <Link to="/menus" className="buttonHero">
                    Voir
                </Link>

            </section>

            <section className="cardMenu">

                <h2>Desserts</h2>

                <Link to="/desserts" className="buttonHero">
                    Voir
                </Link>

            </section>


            <section className="cardMenu">

    <h2>Boissons</h2>

    <Link to="/boissons" className="buttonHero">
        Voir
    </Link>

</section>

</div>

);
}

export default Menu;







