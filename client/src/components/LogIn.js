import React, {useState} from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { Palette } from './utils/colors';
import { useDispatch } from 'react-redux';
import { logIn, signIn, none } from './utils/stores/log';
import { useSelector } from 'react-redux';
import cancel from '../resources/images/cancel.png'
import { fetchLogIn, fetchSignUp } from './utils/fetchs';
import { saveUser } from './utils/stores/user';


const LogIn = () => {

    const formInitialState= {
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
        name: '',
        last_name: ''
    }
    const [formData, setFormData] = useState(formInitialState)
    const [error, setError] = useState('')

    const onChangeForm = (e) => {
        let name = e.target.name, value = e.target.value
        setFormData({...formData, [name]: value })
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        let response;
        if (log === 'login'){
            response = await fetchLogIn(formData)

        }else if(log === 'signin'){
            response = await fetchSignUp(formData)

        }
        
        if(response.hasOwnProperty('error')){
            setError(response.error)
        }else{
            changeLogState('none')
            setFormData({...formInitialState})
            dispatch(saveUser(response))
            
        }
    } 


    const log = useSelector(state => state.log.value)
    const dispatch = useDispatch();
    const changeLogState = (newValue) => {
        switch(newValue){
            case 'none':
                dispatch(none())
                break;
            case 'signin':
                dispatch(signIn())
                break;
            case 'login':
                dispatch(logIn())
                break;
            default:
        }
    }

    const dependsOnLogState = () => {
        if(log === 'login'){
            return (
                <>
                    <Button sx={{backgroundColor: Palette.SECONDARY}}variant="contained" onClick={onSubmitForm}> Log In</Button>
                    {error? <p>{error}</p> : null}
                    <Line/>
                    <p>Dont have an account? <mark onClick={() => changeLogState('signin')}>Sign In</mark></p> 
                </>
            )
        }else{
            return (
                <>
                    <TextField required sx={{margin: '5px', width: '75%'}} name='password_confirmation' type='password' label="Repeat Password" variant="filled" value={formData.password_confirmation} onChange={onChangeForm}/>
                    <TextField required sx={{margin: '5px', width: '75%'}} name='email' label="Email" variant="filled" value={formData.email} onChange={onChangeForm}/>
                    <TextField required sx={{margin: '5px', width: '75%'}} name='name' label="Name" variant="filled" value={formData.name} onChange={onChangeForm}/>
                    <TextField required sx={{margin: '5px', width: '75%'}} name='last_name' label="Last Name" variant="filled" value={formData.last_name} onChange={onChangeForm}/>
                    <Button sx={{backgroundColor: Palette.SECONDARY, margin: '10px 0px'}}variant="contained" onClick={onSubmitForm}> Sign In</Button>
                    {error? <p>{error}</p> : null}
                    <Line/>
                    <p>Already have an account? <mark onClick={() => changeLogState('login')}>Log In</mark></p> 
                </>
            )
        }
    }

    return ( 
        <Auth>
            <AuthForm>
                <h1>Welcome Trader</h1>
                <TextField required sx={{margin: '5px', width: '75%'}} name='username' type='text' label="Username" variant="filled" value={formData.username} onChange={onChangeForm}/>
                <TextField required sx={{margin: '5px', width: '75%'}} name='password' type='password' label="Password" variant="filled" value={formData.password} onChange={onChangeForm}/>
                {dependsOnLogState()}   
                <Quit src={cancel} alt='quit button' onClick={()=> changeLogState('none')}/>
            </AuthForm>   
        </Auth>
    );
}
 
export default LogIn;

const Auth = styled.div`
    position: fixed;
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); 
    z-index: 1; 

    display: flex;
    align-items:center;
    justify-content:center;
    
`

const AuthForm = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 0 10px;
    background-color: #F6F3EF;
    padding: 30px;

    z-index: 3; 

    border-style: solid;
    border-width: 2px;
    border-color: gray;
    box-shadow: 5px 10px 18px #888888;
    
    > * {
        margin-bottom: 25px;
    }
`

const Quit = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    margin: 10px;
`

const Line = styled.div`
    height: 0;
    width: 80%;
    margin: 20px;
    border-bottom: 1px solid gray;
`
