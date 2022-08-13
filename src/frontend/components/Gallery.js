import {  Row, Col } from 'react-bootstrap'
import skull1 from './images/skulls/1.png'
import skull2 from './images/skulls/2.png'
import skull3 from './images/skulls/3.png'
import skull4 from './images/skulls/4.png'

const Gallery = () => {
    return (
        <Row className="p-3" style={{
                        fontSize: "25px"
        }}>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <img src={skull1} alt="Skull 1" className="rounded" style={{
                    border: "3px solid white"
                    }}/>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <img src={skull2} alt="Skull 2" className="rounded" style={{
                    border: "3px solid white"
                    }}/>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <img src={skull3} alt="Skull 3" className="rounded" style={{
                    border: "3px solid white"
                    }}/>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <img src={skull4} alt="Skull 4" className="rounded" style={{
                    border: "3px solid white"
                    }}/>
            </Col>
        </Row>
    );
}
export default Gallery