import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CoinInfo() {
  return (
    <Row>
      <col>
        <Row>
          Logo
          <Col>Logo</Col>
          <Col>Bitcoin</Col>
        </Row>
      </col>
      <col>
        <div>High 7000</div>
        <div>Low 6700</div>
      </col>
      <col>
        <div>Average 6900</div>
        <div>Change -3% </div>
      </col>
    </Row>
  );
}

export default CoinInfo;
