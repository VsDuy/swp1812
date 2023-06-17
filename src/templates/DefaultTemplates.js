import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import '../styles/Default.css';

export default function DefaultTemplate({className="container-fluid", title, children}){
    return (
        <div className={className}>
            <Menu/>
            <Banner/>
            <div className="row" id="path">
                <h3>{title}</h3>
            </div>
            {children}
            <Footer/>
        </div>
    );
}