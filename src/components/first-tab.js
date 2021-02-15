import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";

class FirstTab extends Component {
  render() {
    return (
      <Container>
        <FormGroup row>
          <Label for="title" sm={2}>
            Заголок
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              id="title"
              value={this.props.title}
              onChange={this.props.handleSubmitTitle}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>
            Text Area
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={this.props.description}
              onChange={this.props.handleSubmitDescription}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Checkbox
          </Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  id="checkbox2"
                  checked={this.props.status}
                  onChange={this.props.handleChecked}
                />
                {this.props.status ? "On" : "Off"}
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Container>
    );
  }
}

export default FirstTab;
