import {
    Link
} from "react-router-dom";

import { Image, Row, Col, Nav, Button } from 'react-bootstrap'
import icon_di from './images/icon_di.png'
import icon_tw from './images/icon_tw.png'
import icon_os from './images/opensea.png'
import logo from './images/logo.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Row className="px-4 py-4 mb-3">
            <Row className="d-none d-sm-block my-3">
                <Image src={logo} className="d-flex align-items-start" style={{
                    width: "150px"
                }}/>
            </Row>
            <Row>
                <Col className="d-none d-lg-block col-5 text-light">
                        <div className="d-flex align-items-start" style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            color: "white"
                        }}>
                            <a href="/" style={{ color: "white", fontWeight: "bold", textDecoration: "none", paddingRight: "15px" }}>Home</a>
                            <a href="#mint" style={{ color: "white", fontWeight: "bold", textDecoration: "none", paddingRight: "15px" }}>Mint</a>
                            <a href="#roadmap" style={{ color: "white", fontWeight: "bold", textDecoration: "none", paddingRight: "15px" }}>Roadmap</a>
                            
                            {/* <Nav.Link as={Link} to="/about" style={{ color: "#80d554", fontWeight: "bold"  }}>About</Nav.Link>
                            <Nav.Link as={Link} to="/best-moments" style={{ color: "#80d554", fontWeight: "bold"  }}>Best Moments</Nav.Link>
                            <Nav.Link as={Link} to="/family" style={{ color: "#80d554", fontWeight: "bold"  }}>Family</Nav.Link>
                            <Nav.Link as={Link} to="/faq" style={{ color: "#80d554", fontWeight: "bold"  }}>FAQ</Nav.Link> */}
                        </div>
                </Col>
                <Col className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <div className="float-end" style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis"
                        }}>
                        <a href="https://twitter.com/SkullLabNFT1" target="_blank" className="btn">
                            <Image src={icon_tw} width="30" height="30" className="image"/>
                        </a>
                        <a href="https://discord.gg/3RSKCnaU" target="_blank" className="btn">
                            <Image src={icon_di} width="30" height="30" className="image"/>
                        </a>
                        {/* <a href="https://opensea.io/" target="_blank" className="btn">
                            <Image src={icon_os} width="30" height="30" className="image"/>
                        </a> */}
                        {account ? (
                            <a
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </a>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </div>
                </Col>
            </Row>
        </Row>
    )

}

export default Navigation;