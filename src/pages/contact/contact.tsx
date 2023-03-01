import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Navigation from '../../components/Navbar/Navigation';
import Popup from '../../components/Popup/Popup';
import Footer from '../../components/Footer/Footer';
import './contact.css';
import { PopupType } from '../../types';

const Contact = () => {
  const [popupState, setPopupState] = useState<PopupType>({
    showPopup: false,
    text: '',
  });

  const resetForm = (): void => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  const togglePopup = () => {
    setPopupState(prevState => ({
      ...prevState,
      showPopup: !popupState.showPopup
    }));
  };

  const changeText = (status: string): void => {
    if (status === 'success') {
      setPopupState(prevState => ({
        ...prevState,
        text: 'Message successfully sent.'
      }));
    } else {
      setPopupState(prevState => ({
        ...prevState,
        text: 'Message successfully sent.'
      }));
    }
  };

  const handleResponse = (response: string): void => {
    changeText(response);
    togglePopup();
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (document.getElementById('formName') as HTMLInputElement)
      .value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLInputElement)
      .value;

    axios({
      method: 'POST',
      url: 'https://abudarda.co.uk/contact/send',
      data: {
        name: name,
        email: email,
        message: message,
      },
    })
      .then((response) => {
        const {
          data: { msg },
        } = response;
        handleResponse(msg);
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err);
      });
  };

  return (
    <div>
      <Navigation />
      <Container>
        <div className='contact__title'>CONTACT ME</div>
        <Row>
          <Col>
            {popupState.showPopup ? (
              <Popup text={popupState.text} closePopup={togglePopup} />
            ) : (
              <Form
                id='contact-form'
                role='form'
                name='contact-form'
                onSubmit={handleSubmit}
                method='POST'
              >
                <Form.Group controlId='formName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='formName'
                    placeholder='Enter your name...'
                  />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter your email address...'
                  />
                </Form.Group>
                <Form.Group controlId='message'>
                  <Form.Label>Message</Form.Label>
                  <textarea
                    className='form-control'
                    id='message'
                    placeholder='Type your message...'
                  ></textarea>
                </Form.Group>
                <div id='submit-button'>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
