import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonContainer } from './Button';

export default class Contact extends Component {
  render() {
    return (
      <Container id="contact" className="max-width mt-5 mb-5">
        <Row className="contactContainer">
          <Col>
            <h2 className="mb-5">Contact form</h2>
            <Form>
              <Form.Group controlId="form">
                <Row>
                  <Col>
                    <Form.Control placeholder="Name" className="mb-3" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" className="mb-3" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control placeholder="Subject" className="mb-3" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave your message.."
                      rows="5"
                    />
                  </Col>
                </Row>
                <Button variant="primary" className="mt-3">
                  Enviar Mensaje
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h2 className="mb-5">Contact e-mail</h2>
            <div className="infoRight">
              <div className="infoContacting">
                <div className="iconContact"></div>
                <p>Montevideo, Uruguay</p>
              </div>
              <div className="infoContacting">
                <div className="iconContact">
                  <ButtonContainer>
                    <span className="mr-2">
                      <i className="fa fa-envelope" />
                    </span>
                  </ButtonContainer>
                </div>
                <p>
                  <></>
                  <a href="mailto:mtheorysoft@gmail.com.uy">mtheorysoft@gmail.com.uy</a>
                </p>
              </div>
              <div className="infoContacting">
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

