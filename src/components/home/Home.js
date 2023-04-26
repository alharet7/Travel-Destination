import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import './Home.css'


function Home(props) {
    return (
        <div className="homeClass">
            <Header />
            <Tours data02={props.data} />
            <Footer />
        </div>
    )
}

export default Home;