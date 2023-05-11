import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { Component, useState, useEffect } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {SignUpAction,  SignupError } from '../action/Action';
import { auth } from '../firebase';
import { signupService } from '../services/Services';

const SignUp = (props) => {
    const isLogin = useSelector((state) => state.LoginStore.isLogin)
    const dispatch  = useDispatch()
    const signupAction = (data) => dispatch(SignUpAction(data))
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        name:'',
        nameError: '',
        email:'',
        emailError: '',
        password: '',
        passwordError: '',
        loading:false,
        backendError: ''
    });
    const [disableButton, setDisableButton] = useState(false)
    const onChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value,
            emailError: "",
            passwordError: "",
            nameError:'',
            backendError:''
        })
        setDisableButton(false)
        console.log(inputValue, 'inputValue')
    }
    const submitLoginForm = () => {
        let emailRegex = !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/
        setDisableButton(true)
        if(inputValue.name === ''){
            setInputValue({
                ...inputValue, 
                nameError:'Enter your name',
            })
        }
        else if(inputValue.email === ''){
            setInputValue({
                ...inputValue, 
                emailError:'Enter your email',
            })
        }
        else if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/.test(inputValue.email)){
            setInputValue({
                ...inputValue,
                emailError:'Enter valid email id'
            })
        }
        else if(inputValue.password === ''){
            setInputValue({
                ...inputValue, passwordError:'Enter your passwords'
            })
        }
        else{
            createUserWithEmailAndPassword(auth, inputValue.email, inputValue.password, inputValue.name).then((res) => {
                setDisableButton(false)
                console.log(res.user)
                const data = res.user;
                signupAction(res.user)
                updateProfile(data, {
                    displayName: inputValue.name
                })
                navigate('/login')
                
            }).catch((error) => {
                setDisableButton(false)
                console.log('error', error)
                setInputValue({...inputValue, backendError: error.code})
            })
        }
    }
    useEffect(() => {
        if(isLogin){
            // navigate(-1)
            navigate('/')
        }
    }, []);
    return (
        <div className='login-wrapper'>
            <div className='w-100 bg-white'>
                <h3 className='font-weight-bold mb-3 text-primary pb-3'>Signup</h3>
                 <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={inputValue.name} onChange={onChangeHandler} name='name' placeholder="Enter name" />
                    {inputValue.nameError ? <p className='text-danger'>{inputValue.nameError}</p> :''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={inputValue.email} onChange={onChangeHandler} name='email' placeholder="Enter email" />
                    {inputValue.emailError ? <p className='text-danger'>{inputValue.emailError}</p> :''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={inputValue.password} onChange={onChangeHandler} name='password' placeholder="Password" />
                    {inputValue.passwordError ? <p className='text-danger'>{inputValue.passwordError}</p> :''}
                </Form.Group>
                {inputValue.backendError ? <p className='text-danger'>{inputValue.backendError}</p> : ''}
                <Button disabled={disableButton} variant="primary" type="submit" onClick={submitLoginForm}>
                    Submit
                </Button>
                <p className='mt-4 mb-0'>Already have an Account? <Link to='/login'> Login here</Link></p>
            </div>
        </div>
    )
}
export default SignUp