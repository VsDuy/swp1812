import DefaultTemplate from "../templates/DefaultTemplates";
import "../styles/Default.css";
import Button from 'react-bootstrap/Button';


export default function Home() {
    return (
        <DefaultTemplate clasName="container" >
            <div className="container-fluid col-8" >

                <h3 className="row" style={{textAlign: "center" ,backgroundColor:"#e3f2fd"}}>Dich Vu Tieu Bieu</h3>
                <div className="row content" id="home">
                    <div className="col-12 col-sm-4 product">
                        <img src="https://cdn.tuoitre.vn/2020/7/4/bgimg8261-1-1593833212900164076509.jpg" width="200" height="150" ></img>
                        <h5 style={{fontSize:18,color:'blue'}}>Trung Tâm tiêm chủng</h5>
                        <p style={{fontSize:12}}>Trung tâm tiêm chủng mang đến dịch vụ y tế cao cấp, những loại vác-xin tốt nhất mà không hề mất phí bảo quản như các trung tâm tiêm chủng khác cùng đội ngũ y bác sĩ được đào tạo bài bản tại các trường đại học Y hàng đầu trong nước.</p>
                        <Button variant="outline-success" href="https://childrencare.vn/trung-tam-tiem-chung/">Add new</Button>{' '}<br></br>
                    </div>
                    <div className="col-12 col-sm-4 product">
                        <image></image>
                        <img src="" width="200" height="150"></img>
                        <h5 style={{fontSize:18,color:'blue'}}>Phòng khám tai mũi họng </h5>
                        <p>Price :15</p>
                        <button type="submit" className="btn btn-success">Enter here</button>
                    </div>
                    <div className="col-12 col-sm-4 product">
                        <image></image>
                        <img src="" width="200" height="150"></img>
                        <h5 style={{fontSize:18,color:'blue'}}>Dịch vụ tham vấn trị liệu tâm lí</h5>
                        <p>Price :6</p>
                        <button type="submit" className="btn btn-success">Enter here</button>
                    </div>
                    
                  

                    </div>

               
            </div>
            

        </DefaultTemplate>
    );
}