
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import '../styles/Default.css';

export default function UserTemplate({className="container-fluid", title, children}){
    return (
        <div className={className}>
            
            <Menu/>
            <div className="row" id="path">
                <h3>{title}</h3>
            </div>
            {children}
            <Footer/>
        </div>
    );
}