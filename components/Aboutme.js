import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="footer-space">
      <Row>
        <Col>
          <div class="animated-text">
            About <span></span> <br />
          </div>
          <p style={{ fontSize: "25px" }}>
            &emsp; Hello!! my name is Rindang Tulus Sumalyo, Im a new Electronic
            Engineering Polytechnic Institute of Surabaya student with NRP
            3124600081. My major is Computer sience, im in D4 IT C class. Nice
            to meet you !!
          </p>
        </Col>
        <Col>
          <img
            className="img-abt"
            src={require("../assets/images/me.png")}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
