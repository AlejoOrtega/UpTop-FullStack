import React, {useState} from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';
import logoBlack from '../resources/images/logo-black.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signup, login, logout } from './utils/fetchs';

import { useDispatch } from 'react-redux';
import { saveUser, logOut } from './utils/stores/user';

import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.value)
    const [error, setError] = useState('')
    //Forms
    const formInitialState= {
        username: '',
        password: '',
        password_confirmation: ''
    }
    const [formData, setFormData] = useState(formInitialState)
    const onChangeForm = (e) => {
        let name = e.target.name, value = e.target.value
        setFormData({...formData, [name]: value })
    }
    const onSubmitForm = async (e, type) => {
        e.preventDefault()
        let response;
        if (type === 'login'){
            response = await login(formData)

        }else if(type === 'signin'){
            response = await signup(formData)

        }
        
        if(response.hasOwnProperty('error')){
            setError(response.error)
        }else{
            setFormData({...formInitialState})
            setLogInSelection(false)
            setSignInSelection(false)
            dispatch(saveUser(response.username))
        }
    } 
    //Buttons
    const [isLogInSelected, setLogInSelection] = useState(false)
    const [isSignInSelected, setSignInSelection] = useState(false)
    const changeLogInSelectedState = () => {
        setLogInSelection((prev)=> !prev)
        setSignInSelection(false)
        setFormData({...formInitialState})
    }
    const changeSignInSelectedState = () => {
        setSignInSelection((prev)=> !prev)
        setLogInSelection(false)
        setFormData({...formInitialState})
    }

    const onLogOut = () => {
        logout()
        dispatch(logOut())
    }

    const userLoggedIn = () => {
        if(currentUser !== ''){
            return (
                <div style={{display: 'flex'}}>
                    <Button variant="contained" onClick={()=>navigate('/plans')}>Plans</Button>
                    <Button variant="contained" onClick={()=>navigate('/my-courses')}>My courses</Button>
                    <h1 onClick={()=>navigate('/profile')}>{currentUser}</h1>
                    <Button variant="contained" onClick={onLogOut}>Log Out</Button>
                </div>
            )
        }else{
            return (
                <> 
                    <div className='log-in-section'>
                        <Button variant="contained" onClick={()=>navigate('/plans')}>Plans</Button>
                        <Button variant="contained" sx={{marginRight: '10px'}} onClick={changeLogInSelectedState}>
                            Log In
                        </Button>
                        <Button variant="contained" onClick={changeSignInSelectedState}>Sign In</Button>
                    </div>
                    { isLogInSelected? <LogIn formData={formData} onChange={onChangeForm} onSubmit={onSubmitForm} error={error}/> : null }
                    { isSignInSelected? <SignIn formData={formData} onChange={onChangeForm} onSubmit={onSubmitForm}/> : null}
                </>    
                );
        }
    }
    return ( 
    <>
        <div className='header'>
            <h1>Up Top Trading</h1>
            <img className='logo-header' src={logoBlack} alt='up-top-logo' onClick={()=>navigate('/')}/>
            {userLoggedIn()}
            
        </div>
    </> 
    );
}
 
export default Header;<></>