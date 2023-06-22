import DefaultTemplate from "../templates/DefaultTemplates";
import "../styles/Default.css";



export default function Home() {
    return (
        <DefaultTemplate clasName="container" >
            <div className="container-fluid col-8">

                <h3 className="row">Dich Vu Tieu Bieu</h3>
                <div className="row content" id="home">
                    <div className="col-12 col-sm-3 product">
                        <img src="" width="150" height="150" ></img>
                        <h5>Product1</h5>
                        <p>Price :10</p>
                        <button type="submit" className="btn btn-success" >Enter here</button>
                    </div>
                    <div className="col-12 col-sm-3 product">
                        <image></image>
                        <img src="" width="150" height="150"></img>
                        <h5>Product2</h5>
                        <p>Price :15</p>
                        <button type="submit" className="btn btn-success">Enter here</button>
                    </div>
                    <div className="col-12 col-sm-3 product">
                        <image></image>
                        <img src="" width="150" height="150"></img>
                        <h5>Product3</h5>
                        <p>Price :6</p>
                        <button type="submit" className="btn btn-success">Enter here</button>
                    </div>
                    <div className="col-12 col-sm-3 product">
                        <image></image>
                        <img src="" width="150" height="150"></img>
                        <h5>Product4</h5>
                        <p>Price :6</p>
                        <button type="submit" className="btn btn-success" >Enter here</button>
                    </div>

                  

                    </div>

               
            </div>
            

        </DefaultTemplate>
    );
}