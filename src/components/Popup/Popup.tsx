import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { PopupType } from '../../types';

const Popup = (props: PopupType) => {  
  return (  
    <Modal.Dialog>
      <Modal.Body>
        <div className='col text-center'>
          <p>{props.text}</p>
          <Button variant='secondary' onClick={props.closePopup}>Close</Button>          
        </div>
      </Modal.Body>
    </Modal.Dialog> 
  );  
};  

export default Popup;