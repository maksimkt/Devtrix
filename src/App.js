import FirstTab from "./components/first-tab";
import SecondTab from "./components/second-tab";
import ThirdTab from "./components/third-tab";
import React, { Component } from "react";
import FourthTab from "./components/fourth-tab";
import FormData from "./components/FormData";
import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      phoneNumber: this.props.phoneNumber,
      status: false,
      email: this.props.email,
      img: "",
      imgs: [],
      radio: "",
      tab: 1,
      count: 5,
    };
    this.fileInput = React.createRef();
  }

  imgCounter = (count) => {
    this.setState({ count });
  };

  showButton = () => {
    return;
  };

  imgUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({
          img: reader.result,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  handleSubmitTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  handleSubmitPhone = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };
  handleSubmitEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleSubmitDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  handleChecked = () => {
    this.setState({ status: !this.state.status });
  };
  changeTab = (tab) => {
    this.setState({ tab });
  };
  updateRadioButton = (e) => {
    this.setState({
      radio: e.target.value,
    });
  };
  validation = (tab) => {
    switch (tab) {
      case 1:
        return !!this.state.title;
      case 2:
        return !!this.state.phoneNumber;
      default:
        return true;
    }
  };

  moreImgAdd = () => {
    const imgs = this.state.imgs;
    const img = this.state.img;
    if (imgs.length < 5) {
      imgs.push(img);
    }
    return imgs;
  };

  render() {
    // console.log(this.state.imgs);
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            {this.state.tab === 1 && (
              <FirstTab
                title={this.state.title}
                handleSubmitTitle={this.handleSubmitTitle}
                description={this.state.description}
                handleSubmitDescription={this.handleSubmitDescription}
                status={this.state.status}
                handleChecked={this.handleChecked}
              />
            )}
            {this.state.tab === 2 && (
              <SecondTab
                phoneNumber={this.state.phoneNumber}
                handleSubmitPhone={this.handleSubmitPhone}
                email={this.state.email}
                handleSubmitEmail={this.handleSubmitEmail}
              />
            )}
            {this.state.tab === 3 && (
              <ThirdTab
                img={this.state.img}
                imgUpload={this.imgUpload}
                moreImgAdd={this.moreImgAdd}
                count={this.state.count}
                imgCounter={this.imgCounter}
              />
            )}
            {this.state.tab === 4 && (
              <FourthTab
                radio={this.state.radio}
                updateRadioButton={this.updateRadioButton}
              />
            )}
            {this.state.tab === 5 && (
              <FormData
                title={this.state.title}
                description={this.state.description}
                status={this.state.status}
                phoneNumber={this.state.phoneNumber}
                email={this.state.email}
                radio={this.state.radio}
                imgs={this.state.imgs}
              />
            )}
            {this.state.tab > 1 && this.state.tab < 4 && (
              <Button
                color="link"
                onClick={() => this.changeTab(this.state.tab - 1)}
              >
                Prev
              </Button>
            )}
            {this.state.tab < 4 && (
              <Button
                disabled={!this.validation(this.state.tab)}
                color="link"
                onClick={() => this.changeTab(this.state.tab + 1)}
              >
                Next
              </Button>
            )}
            {this.state.tab === 4 && (
              <Button
                color="link"
                onClick={() => this.changeTab(this.state.tab + 1)}
              >
                Save
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
