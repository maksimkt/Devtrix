import React, { Component } from "react";
import { Button, Col, FormGroup, Label, Input, FormText } from "reactstrap";

class ThirdTab extends Component {
  render() {
    return (
      <div>
        <FormGroup row>
          <Label for="File" sm={2}>
            You can upload {this.props.count} more foto
          </Label>
          <Col sm={10}>
            <Input
              type="file"
              id="File"
              name="files"
              accept="image/png, image/jpeg"
              onChange={this.props.imgUpload}
              
            />
            <Button
              disabled={this.props.count === 0}
              onClick={() => {
                this.props.moreImgAdd();
                this.props.imgCounter(this.props.count - 1);
              }}
            >
              Upload img
            </Button>
            <FormText></FormText>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default ThirdTab;
