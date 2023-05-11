import React, {useState} from 'react'
import Toast from 'react-bootstrap/Toast';
import { CheckIcon, CloseIconFill, InfoIcon } from './Svg';
import { useLocation } from 'react-router';

const navigate = useLocation()
export const Loader = () => <div className="flone-preloader-wrapper"><div className="lds-ripple"><div></div><div></div></div></div>
export const SuccessNotification = (props) => {
    const [show, setShow] = useState(true);
    return (<Toast className="d-inline-block m-1" onClose={() => setShow(false)} show={show} bg={props.bg ? props.bg : 'secondary'} autohide={true} delay={2000}>
          <Toast.Header closeVariant={'white'}>
          <p className='mb-0'>
            {props.bg === 'success' ? <CheckIcon/> : ''}
            {props.bg === 'info' ? <InfoIcon/> : ''}
            {props.bg === 'danger' ?  <CloseIconFill/> : ''}
            {props.bg === 'warning' ?  <InfoIcon/> : ''}
            
            <span className='ps-2'>{props.body ? props.body : 'Notification text'}</span>
            </p>           
          </Toast.Header>
        </Toast>
  );
}