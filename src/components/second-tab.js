import React, { Component } from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

class SecondTab extends Component {
  render() {
    return (
      <>
        <Form>
          <FormGroup row>
            <Label for="exampNumber" sm={2}>
              Номер телефона
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                id="exampleNumber"
                value={this.props.phoneNumber}
                onChange={this.props.handleSubmitPhone}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={this.props.email}
                onChange={this.props.handleSubmitEmail}
              />
            </Col>
          </FormGroup>
        </Form>
      </>
    );
  }
}

export default SecondTab;
