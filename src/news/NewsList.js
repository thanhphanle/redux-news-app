import React, { Component } from "react";
import "./NewsList.css";
import RssParser from "rss-parser";
import { Spinner } from "reactstrap";
import NewsItem from "./NewsItem";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      items: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    let rssParser = new RssParser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    rssParser
      .parseURL(CORS_PROXY + "https://vnexpress.net/rss/tin-moi-nhat.rss")
      .then(feed => {
        this.setState({
          title: feed.title,
          items: feed.items,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const { title, items, isLoading } = this.state;

    return (
      <div className="NewsList">
        {isLoading === true ? <Spinner color="dark" /> : null}
        <div>{title}</div>
        <div>
          {items.map((item, i) => (
            <NewsItem
              key={i}
              title={item.title}
              description={item.contentSnippet}
              pubDate={item.pubDate}
              link={item.link}
              content={item.content}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsList;
