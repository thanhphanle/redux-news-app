import React, { Component } from "react";
import "./NewsItem.css";
import { Container, Row, Col } from "reactstrap";

class NewsItem extends Component {
  componentDidMount() {
    let content = this.props.content;
    this.extractImgLink(content);
  }

  extractImgLink(content) {
    let str1 = content.substring(content.indexOf('src="') + 5, content.length);
    let str2 = str1.substring(0, str1.indexOf(">"));
    let imgUrl = str2.replace('"', "").trim();
    return imgUrl;
  }

  render() {
    const { title, description, pubDate, link, content } = this.props;

    return (
      <div className="NewsItem">
        <Container className="NewsItemContainer">
          <Row>
            <Col sm="3">
              <img
                className="NewsItemImg"
                alt=""
                src={this.extractImgLink(content)}
              />
            </Col>
            <Col sm="9">
              <Container>
                <Row className="NewsItemRow">
                  <Col className="TitleCol">
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                      <span className="NewsItemTitle">{title}</span>
                    </a>
                  </Col>
                  <Col className="PubDateCol" sm="4">
                    {pubDate}
                  </Col>
                </Row>
                <Row className="NewsItemRow">
                  <Col className="DescriptionCol">{description}</Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewsItem;
