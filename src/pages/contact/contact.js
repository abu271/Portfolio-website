import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import Navigation from '../../components/Navbar/Navigation';
import Popup from '../../components/Popup/Popup';
import Footer from '../../components/Footer/Footer';
import './contact.css';

class Contact extends Component {
  constructor(props){  
    super(props);  
    this.state = { 
      showPopup: false,
      text:''
    };  
  } 
    
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST', 
      url:'http://abudarda.herokuapp.com/contact/send', 
      data: {
        name: name,   
        email: email,  
        message: message
      }
    }).then((response)=>{
      this.changeText(response.data.msg);
      this.togglePopup();
      this.resetForm();
    });
  }
  resetForm(){
    document.getElementById('contact-form').reset();
  }
  changeText(status){
    if(status === 'success'){
      this.setState({  
        text: 'Message successfully sent.' 
      });
    } else {
      this.setState({  
        text: 'Failed to send message.' 
      });
    }
  }
  togglePopup() {  
    this.setState({  
      showPopup: !this.state.showPopup  
    });
  }

  render(){
    return (
      <div>
        <Navigation />
        <Container>
          <div className='contact__title'>Contact me</div>
          <Row>
            <Col>
              {
                this.state.showPopup ?  
                  <Popup 
                    text={this.state.text}
                    closePopup={this.togglePopup.bind(this)}
                  />
                  : 
                  <Form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                    <Form.Group controlId='formName'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type='formName' placeholder='Enter your name...' />
                    </Form.Group>          
                    <Form.Group controlId='email'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' placeholder='Enter your email address...' />
                    </Form.Group>          
                    <Form.Group controlId='message'>
                      <Form.Label>Message</Form.Label>
                      <textarea className='form-control' rows='5' id='message' placeholder='Type your message...'></textarea>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                    Submit
                    </Button>
                  </Form>
              } 
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Contact;