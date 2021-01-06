import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { Row, Col, } from "react-bootstrap";
import '../app.css';
import ReactRoundedImage from "react-rounded-image";


export class Home extends React.Component {

    render() {
        return ( // these elements will be brought into the app.js class
            <div>
                <h1>TOP SELLING ALBUMS</h1>
                <h2>OF THE 2010's</h2>
                {/* link brings to different page in app */}
                <Link to="/list" class="btn btn-secondary">Have a Look!</Link>
                <div class="Icons">
                    <h2 class="Para">CHECK OUT THSES SITES IF YOU WANT TO LISTEN TO ANY OF THE ALBUMS YOU SEE</h2>
                    <Container >
                        <Row>
                            <Col>
                                <a class="ImgLink" href="https://www.spotify.com/ie/">
                                    <ReactRoundedImage
                                        image={"https://amp.independent.ie/business/technology/b8438/34462670.ece/AUTOCROP/w300/2016-02-18_bus_16966093_I2.JPG"}
                                        imageWidth="150"
                                        imageHeight="150"
                                        roundedSize="13"
                                        hoverColor="#DD1144"
                                    />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.apple.com/ie/apple-music/">
                                    <ReactRoundedImage
                                        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/64px-ITunes_12.2_logo.png"}
                                        imageWidth="150"
                                        imageHeight="150"
                                        roundedSize="13"
                                        hoverColor="#DD1144"
                                    />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://soundcloud.com/">
                                    <ReactRoundedImage
                                        image={"https://brandpalettes.com/wp-content/uploads/2019/03/soundcloud_logo-300x300.png"}
                                        imageWidth="150"
                                        imageHeight="150"
                                        roundedSize="13"
                                        hoverColor="#DD1144"
                                    />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://tidal.com/">
                                    <ReactRoundedImage
                                        image={"data:image/png;base64,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"}
                                        imageWidth="150"
                                        imageHeight="150"
                                        roundedSize="13"
                                        hoverColor="#DD1144"
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        );
    }
}