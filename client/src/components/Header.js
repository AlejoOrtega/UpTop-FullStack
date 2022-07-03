import React, {useState} from 'react';
import styled from "styled-components"
import logoBlack from '../resources/images/logo-black.png'
import {Palette} from './utils/colors.js'
import { Avatar, Button, ButtonGroup, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchLogOut } from './utils/fetchs';

import { useDispatch } from 'react-redux';
import { logOut } from './utils/stores/user';
import { logIn, signIn } from './utils/stores/log';

import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.value)
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    //Header Menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleOption = (option) => {
        switch(option){
            case 'plan':
                navigate('/plans')
                break;
            case 'course':
                navigate('/my-courses')
                break;
            case 'profile':
                navigate('/profile')
                break;
            case 'logout':
                onLogOut()
                break;
            default:
        }

        handleClose()
    }

    const changeLogInSelectedState = () => {
        dispatch(logIn())
    }
    const changeSignInSelectedState = () => {
        dispatch(signIn())
    }

    const onLogOut = () => {
        fetchLogOut()
        dispatch(logOut())
    }


    const userLoggedIn = () => {
        if(currentUser !== ''){
            return (
                <div style={{display: 'flex'}}>
                    <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px', color: 'black'}}>Admin</Button>
                    <Button
                        variant='contained'
                        size="large"
                        sx={{backgroundColor: Palette.SECONDARY, color: 'black'}}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Avatar sx={{marginRight: '10px'}}alt="Profile Picture" src={logoBlack} />
                        {currentUser}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>handleOption('profile')}>My Profile</MenuItem>
                        <MenuItem onClick={()=>handleOption('course')}>My Courses</MenuItem>
                        <MenuItem onClick={()=>handleOption('plan')}>Plans</MenuItem>
                        <MenuItem onClick={()=>handleOption('logout')}>Logout</MenuItem>
                    </Menu>
                </div>
            )
        }else{
            return (
                <> 
                    <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={()=>navigate('/plans')}>Plans</Button>
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button onClick={changeLogInSelectedState}>Log In</Button>
                            <Button onClick={changeSignInSelectedState}>Sign In</Button>  
                    </ButtonGroup> 
                </>    
                );
        }
    }
    return ( 
        <MainDiv>
            <SubDiv onClick={()=>navigate('/')}>
                <LogoImage className='logo-header' src={logoBlack} alt='up-top-logo'/>
                <Title>Cipher Investments</Title>
            </SubDiv>
            <Nav>
                {userLoggedIn()}  
            </Nav>
        </MainDiv>
    );
}
 
export default Header;

const MainDiv = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Palette.PRIMARY};
    height: 180px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const SubDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    > * {
        margin: 0 10px;
    }
`;


const Title = styled.h1`
    color: ${Palette.PRIMARY_TEXT}
    witdh:100%;
`;

const LogoImage = styled.img`
    width: 100px;
    height: 100px;
`;

const Nav = styled.div`
    margin-right: 20px;
`;
