import React, { Component } from 'react';
import './NewsList.css';
import RssParser from 'rss-parser';
import { Spinner, Container, Row, Col } from 'reactstrap';
import NewsItem from './NewsItem';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: [],
            isLoading: false,
            imageUrl: ''
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        let rssParser = new RssParser();
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        rssParser
            .parseURL(CORS_PROXY + 'https://vnexpress.net/rss/tin-moi-nhat.rss')
            .then(feed => {
                this.setState({
                    title: feed.title,
                    items: feed.items,
                    imageUrl: feed.image.url,
                    isLoading: false
                });
                console.log(feed);
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    isLoading: false
                });
            });
    }

    render() {
        const { title, items, isLoading, imageUrl } = this.state;

        return (
            <div className="NewsList">
                <div className="NewsListContent">
                    {isLoading === true ? <Spinner color="dark" /> : null}
                    <Container>
                        <Row>
                            <Col sm="3">
                                <img
                                    className="NewsListImg"
                                    alt=""
                                    src={imageUrl}
                                />
                            </Col>
                            <Col>
                                <div>{title}</div>
                            </Col>
                        </Row>
                    </Container>
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
            </div>
        );
    }
}

export default NewsList;
