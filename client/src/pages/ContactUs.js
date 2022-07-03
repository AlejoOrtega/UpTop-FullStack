import React from 'react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { Palette } from '../components/utils/colors';

const ContactUs = () => {
    return ( 
    <Body>
        <h1>Contact Us</h1>
        <p>Contact CIPHER INVESTMENTS and let us build a better future for those that mean the most.</p>
        <SubBody>
            <OurInfo>
                <h3>Our Info</h3>
                <p>1111 6th ave. San Diego CA 92101</p>
                <p>Lucky@cipherinvestments.com </p>
                <p>Drew@cipherinvestments.com</p>
                <p>www.investcipher.com</p>
            </OurInfo>
            <Form>
                <div>
                    <TextField placeholder='First Name'/>
                    <TextField placeholder='Last Name'/>
                </div>
                <TextField sx={{margin: '5px 0'}} placeholder='Email'/>
                <TextField sx={{margin: '5px 0'}} placeholder='Phone Number'/>
                <TextField sx={{margin: '5px 0'}} placeholder='Leave a Message'/>
                <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px', alignSelf: 'center', width:'80%'}}variant="contained">Submit</Button>
            </Form>
        </SubBody>
    </Body> 
    );
}
 
export default ContactUs;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    align-items: center;
    justify-content: center;

    > * {
        margin: 20px 0;
    }
`
const SubBody = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

const OurInfo = styled.div`
    > h3 {
        text-align: center;
    }
    > * {
        margin: 10px 0;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;

    > * {
        margin: 10px 0;
    }
`