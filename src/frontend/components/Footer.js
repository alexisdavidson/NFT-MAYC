import { Image, Row, Col } from 'react-bootstrap'
import icon_di from './images/icon_di.png'
import icon_tw from './images/icon_tw.png'
import icon_os from './images/opensea.png'
import logo from './images/logo.png'

const Footer = () => {
    return (
        <Row className="p-3">
            <Col className="mr-5 col-xl-1 col-12">
                <Row style={{
                        textAlign: "left",
                        fontSize: "18px",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                    }}>
                    <a href="/" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>Home</a>
                    <br />
                    <a href="/" style={{ color: "white", textDecoration: "none" }}>Terms & Conditions</a>
                    <br />
                    <a href="https://ropsten.etherscan.io/address/0xcA28f8815adBedDdf1d877130c7f8F5f4d780CCF" style={{ color: "white", textDecoration: "none" }}>Smart Contracts</a>
                </Row>
                <Row className="mt-5">
                    <div style={{
                            textAlign: "left",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis"
                        }}>
                        <a href="https://twitter.com/SkullLabNFT1" target="_blank" style={{ paddingRight: "15px" }}>
                            <Image src={icon_tw} width="30" height="30" className="image"/>
                        </a>
                        <a href="https://discord.gg/3RSKCnaU" target="_blank" style={{ paddingRight: "15px" }}>
                            <Image src={icon_di} width="30" height="30" className="image"/>
                        </a>
                        {/* <a href="https://opensea.io/" target="_blank" style={{ paddingRight: "15px" }}>
                            <Image src={icon_os} width="30" height="30" className="image"/>
                        </a> */}
                    </div>
                </Row>
            </Col>
            <Col className="col-1 mycontent-left mr-5 d-none d-xl-block"></Col>
            <Row className="mt-5 mycontent-top mr-5 d-sm-block d-xl-none"></Row>
            <Col className="ml-5 text-light">
                <Row className="my-4">
                    <Image src={logo} className="d-flex align-items-start" style={{
                        width: "250px"
                    }}/>
                </Row>
                <Row className="mt-5">
                    <p style={{
                        textAlign: "left",
                        fontSize: "18px",
                        color: "white"
                    }}>
                        ©2022 Skoodle Skulls. All rights reserved.
                    </p>
                </Row>
            </Col>
        </Row>
    );
}
export default Footer