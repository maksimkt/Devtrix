import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

class FormData extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <p>Status: {this.props.status ? "On" : "Off"}</p>
            <h3>phone:{this.props.phoneNumber}</h3>
            <h3>email:{this.props.email}</h3>
            <div>
              {this.props.imgs.map((img) => {
                // eslint-disable-next-line jsx-a11y/alt-text
                return <img style={{ width: 200 }} src={img} key={uuidv4()} />;
              })}
            </div>

            <h3>Услуга: {this.props.radio}</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormData;
