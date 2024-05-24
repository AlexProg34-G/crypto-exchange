import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SubHeader() {
  return (
    <Container>
      <Row>
        <Col>MARKET CAP $2.47T</Col>
        <Col>EXCHANGE VOL $81.07B</Col>
        <Col>Assets 2,297</Col>
        <Col>EXCHANGE 43</Col>
        <Col>Markets 9,093</Col>
        <Col>BTC DOM INDEX 53.8%</Col>
      </Row>
    </Container>
  );
}

export default SubHeader;