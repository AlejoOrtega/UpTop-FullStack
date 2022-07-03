import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogIn from '../components/LogIn';

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
    const log = useSelector(state => state.log.value)

    const isLogSelected = () => {
        
        if(log !== 'none'){
            return <LogIn/>
        }else{
            return null
        }
    }

    return ( 
        <Main>
            {isLogSelected()}
            <Header/>
            <Outlet/>
            <Footer/>
        </Main> 
    );
}

export default Landing;

const Main = styled.div`
    padding: 0 15%;
`