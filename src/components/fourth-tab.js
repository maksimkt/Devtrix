import React, { Component } from "react";
import {
    Col,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  


class FourthTab extends Component {
  render() {
    return (
      <div>
        <FormGroup tag="fieldset" row >
          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check >
              <Label check>
                <Input type="radio" name="radio2" value="500$" onChange ={this.props.updateRadioButton}   /> 
                Услуга 500$
              </Label>
              
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" value="400$" onChange ={this.props.updateRadioButton}/>
                Услуга 400$
              </Label>
              
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" value="300$" onChange ={this.props.updateRadioButton}/> 
                Услуга 300$
              </Label>
              
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2"  value="200$"onChange ={this.props.updateRadioButton}/> 
                Услуга 200$
              </Label>
              
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" value="100$" onChange ={this.props.updateRadioButton}/> 
                Услуга 100$
              </Label>
              
            </FormGroup>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default FourthTab;
