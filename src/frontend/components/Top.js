
import { Image, Row, Col } from 'react-bootstrap'
import skull from './images/skull.png'
import logo from './images/logo.png'

const Top = () => {
    return (
        <Row className="mt-5 p-3">
            <Col className="col-12 col-lg-6 text-light">
                <Row className="my-4">
                    <Image src={logo} className="d-flex align-items-start" style={{
                        width: "300px"
                    }}/>
                </Row>
                <Row className="my-5">
                    <p style={{
                        textAlign: "left",
                        fontSize: "20px"
                    }}>
                        4,000 unique collectible Skulls with proof of ownership stored on the Ethereum blockchain. Skoodle Skulls are "Non-Fungible Tokens" on Ethereum, and each Skoodle Skull was created as an ERC-721 standard token, that powers most digital art and collectibles.
                    </p>
                </Row>
            </Col>
            <Col className="col-12 col-lg-6">
                <img src={skull} alt="Presentation image" className="rounded" style={{
                        border: "5px solid white"
                    }}/>
            </Col>
        </Row>
    );
}
export default Top