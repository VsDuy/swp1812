import React from "react"
import { Chat, ChatFill, GeoAlt, Phone } from "react-bootstrap-icons";
import {} from "react-bootstrap-icons";

const Footer = () => <footer className="page-footer font-small blue pt-4" style={{marginTop:10}}>
    <div className="container-fluid text-center text-md-left" style={{backgroundColor:"#e3f2fd"}}>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3" style={{marginLeft:150}}>
                <h5 className="text-uppercase">Team1 SE1712</h5>
                <p>Health comes first.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Connect</h5>
                <ul className="list-unstyled">
                   <tr><Phone/> 0947592275</tr>
                   <tr><Chat/> Team1@gmail.com</tr>
                   <tr><GeoAlt/> P209 Beta FPT Hà Nội</tr>
                </ul>
            </div>

            
        </div>
    </div>

    <div className="footer-copyright text-center py-3"> Copyright By SE1712
    </div>

</footer>

export default Footer