import { Row, Col } from 'react-bootstrap'

const Stats = ({stats}) => {

    return (
        <Row className="p-3 text-light" style={{
                        fontSize: "25px"
        }}>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    border: "3px solid white"
                }}>
                    <h3>Items</h3>
                    <h2>4,000</h2>
                </div>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    border: "3px solid white"
                }}>
                    <h3>Skulls Minted</h3>
                    <h2>?
                        {/* {
                            stats == null || stats.length == 0 ? '?'
                            :
                            stats.count
                        } */}
                     </h2>
                </div>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    border: "3px solid white"
                }}>
                    <h3>Owners</h3>
                    <h2>?
                        {/* {
                            stats == null || stats.length == 0 ? '?'
                            :
                            stats.num_owners
                        } */}
                     </h2>
                    {/* <h3>Floor</h3>
                    <h2>
                        {
                            stats.length == 0 ? '?'
                            :
                            ((stats.floor_price == null ? '0.00' : stats.floor_price) + ' ETH')
                        }
                    </h2> */}
                </div>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    border: "3px solid white"
                }}>
                    <h3>Volume Traded</h3>
                    <h2>
                        {
                            (stats == null || stats.length == 0 ? '?'
                            :
                            stats.total_volume) + ' ETH'
                        }
                    </h2>
                </div>
            </Col>
        </Row>
    );
}
export default Stats