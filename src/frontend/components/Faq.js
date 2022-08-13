import { Image, Row, Col } from 'react-bootstrap'
import ReactFaq from "react-faq-component";

const Faq = () => {
    const data = {
        rows: [
            {
                title: <span style={{fontWeight: "bold"}}>What is NFT?</span>,
                content: `NFT is a unique digital identifier that cannot be copied, substituted, or subdivided, that is recorded in a blockchain`,
            },
            {
                title: <span style={{fontWeight: "bold"}}>What is skoodle?</span>,
                content:
                    "Skoodle is 4000 skull art NFT collection. Every skoodle is unique.",
            },
            {
                title: <span style={{fontWeight: "bold"}}>Why buy skoodle?</span>,
                content: `Skoodle NFT is a long journey. First 500 skoodle holders can get whitelist for stage two skulllab project. Stage one 4000 skoodle holders will randomly get free mint chances for future project.
                <br/>There will be more giveaway and amazing content coming up in the future.`,
            },
            {
                title: <span style={{fontWeight: "bold"}}>What is the price?</span>,
                content: "0.01 for WL holders, 0.03 for presale, 0.03 for public sale. Each person can mint up to 5 skoodles.",
            },
        ],
    };

    const styles = {
        bgColor: '#dba17b',
        titleTextColor: "white",
        rowTitleColor: "white",
        rowContentColor: 'white',
        // arrowColor: "white",
        textAlign: "left"
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <Row className="my-5 p-3">
            <Col className="text-light">
                <h1 id="mint">FAQ</h1>
                <Row style={{textAlign: "left"}}>
                    <ReactFaq data={data} styles={styles} config={config} />
                </Row>
            </Col>
        </Row>
    );
}
export default Faq