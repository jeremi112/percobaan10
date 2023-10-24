import Header from "./header";
import Poto from "./../assets/PANEL.jpg"
import Gridcard from "./gridCard";
import BasicExample from "./card";
import Panel from "./../assets/PANEL.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainContent=()=>{
    return(
        <div>
            <div>
        <Header/>
            </div> 
            <div>   
        <Container className="mt-5">
            <Row>
                <Col lg="6">
                    <BasicExample />
                </Col>
                <Col lg="6">
                    <BasicExample />
                </Col>
            </Row>
        </Container>
        </div>
        </div>
    )

}
export default MainContent;