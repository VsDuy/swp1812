import DefaultTemplate from "../templates/DefaultTemplates";

export default function AboutUs(){
    return (
        <DefaultTemplate title="About" className="container">
            <div className="row content" id="about">
                Welcome to About component
            </div>
        </DefaultTemplate>
    );
}