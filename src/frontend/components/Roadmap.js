import { Row, Col } from 'react-bootstrap'
import roadmapfull from './images/roadmap/full.jpg'
import roadmap1 from './images/roadmap/1.jpg'
import roadmap2 from './images/roadmap/2.jpg'
import roadmap3 from './images/roadmap/3.jpg'

const Roadmap = () => {
    return (
        <Row className="py-3" style={{fontSize: "25px"}}>
            <h1 className="mb-5" id="roadmap" style={{color: "white"}}>ROADMAP</h1>

            <Col className="col-12 col-lg-12 col-xl-12 mb-12 p-0 d-none d-xl-block">
                <img src={roadmapfull} alt="Roadmap" style={{width:"100%"}} />
            </Col>
            <Col className="col-12 col-lg-12 col-xl-4 mb-4 d-sm-block d-xl-none">
                <img src={roadmap1} alt="Roadmap 1" className="img-responsive" style={{width:"100%"}} />
            </Col>
            <Col className="col-12 col-lg-12 col-xl-4 mb-4 d-sm-block d-xl-none">
                <img src={roadmap2} alt="Roadmap 2" className="img-responsive" style={{width:"100%"}} />
            </Col>
            <Col className="col-12 col-lg-12 col-xl-4 mb-4 d-sm-block d-xl-none">
                <img src={roadmap3} alt="Roadmap 3" className="img-responsive" style={{width:"100%"}} />
            </Col>
        </Row>
    );
}
export default Roadmap