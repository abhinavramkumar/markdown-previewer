import React, { Component } from "react";
import propTypes from "prop-types";
import {
  PageWrapper,
  Container,
  Title,
  Row,
  Input,
  Output,
  CopyButton
} from "./styles";
import { generateMarkdown } from "../playground";

class Home extends Component {
  state = {
    input: ""
  };

  onInput = e => {
    let input = e.target.value;
    let outputContainer = e.target.parentNode.querySelector("#output");

    this.setState(prevState => ({
      input
    }));

    let output = generateMarkdown(input);
    outputContainer.innerHTML = output;
  };

  copyInputText = e => {
    document.execCommand("copy");
  };

  processCopyAction = e => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", this.state.input);
  };

  render() {
    return (
      <PageWrapper onCopy={this.processCopyAction}>
        <Container>
          <Title>Markdown Previewer</Title>
          <Row>
            <Input onChange={this.onInput} value={this.state.input} />
            <Output id="output" />
            <CopyButton onClick={this.copyInputText}>Copy</CopyButton>
          </Row>
        </Container>
      </PageWrapper>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
