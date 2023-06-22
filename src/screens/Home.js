import DefaultTemplate from "../templates/DefaultTemplates";
import "../styles/Default.css";



export default function Home() {
    return (
        <DefaultTemplate clasName="container" >
            <div className="container-fluid col-8" >

                <h3 className="row" style={{textAlign: "center" ,backgroundColor:"#e3f2fd"}}>Dich Vu Tieu Bieu</h3>
                <div className="row content" id="home">
                    <div className="col-12 col-sm-4 product">
                        <img src="" width="150" height="150" ></img>
                        <h5>Trung Tâm tiêm chủng</h5>
                        <p>Price :10</p>
                        <button type="submit" className="btn btn-success" >Enter here</button>
                    </div>
                    <div className="col-12 col-sm-4 product">
                        <image></image>
                        <img src="" width="150" height="150"></img>
                        <h5>Phòng khám tai mũi họng </h5>
                        <p>Price :15</p>
                        <button type="submit" className="btn btn-success">Enter here</button>
                    </div>
                    <div className="col-12 col-sm-4 product">
                        <image></image>
                        <img src="" width="150" height="150"></img>
                        <h5>Dịch vụ tham vấn trị liệu tâm lí</h5>
                        <p>Price :6</p>
                        <button type="submit" className="btn btn-success">Enter here</button>
                    </div>
                    
                  

                    </div>

               
            </div>
            

        </DefaultTemplate>
    );
}