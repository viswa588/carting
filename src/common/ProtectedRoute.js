import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function ProtectedRoute(props) {
    const getState = useSelector((state) => state.LoginStore.isLogin)
    const {Component} = props
    const navigate = useNavigate()
    useEffect(() => {
        console.log(state.getState.LoginStore.isLogin, 'ssds')
        if(!getState){
            navigate('/')
        }
    }, []);
  return (
    <div><Component /></div>
  )
}
export default ProtectedRoute