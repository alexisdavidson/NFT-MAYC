import { Image, Row, Col } from 'react-bootstrap'
import skull from './images/skull.png'
import logo from './images/logo.png'

const BestMoments = () => {
    return (
        <Row className="my-5 p-3">
            <Col>
                <img src={skull} alt="Presentation image" className="rounded"/>
            </Col>
            <Col className="text-light">
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
                        100 unique collectible Slimes with proof of ownership stored on the Ethereum blockchain. Featured on New York Times, CNBC, and Bloomberg. Block Slimes are "Non-Fungible Tokens" on Ethereum, and each Block Slime was created as an ERC-721 standard token, that powers most digital art and collectibles.
                    </p>
                </Row>
            </Col>
        </Row>
    );
}
export default BestMoments