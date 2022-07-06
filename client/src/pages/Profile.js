import React, {useState} from 'react';
import { deleteAccount, updateUsername } from '../components/utils/fetchs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveUser, logOut } from '../components/utils/stores/user';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import user from '../resources/images/user.png'
import { Palette } from '../components/utils/colors';

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.value)
    const [newUser, setNewUser ] = useState('')
    const onDeleteAccount = () => {
        deleteAccount()
        dispatch(logOut())
        navigate('/')
    }

    const onUpdateAccount = async() => {
        let response = await updateUsername(newUser)
        console.log(response)
        dispatch(saveUser(response.username))
    }

    return ( 
    <Body>
        <MainSection>
            <ProfileImage src={user} alt='profile-picture'/>
            <UserInfo>
                <h1>User profile</h1>
                <h3>{currentUser.name + ' ' + currentUser.last_name}</h3>
                <h3>{currentUser.email}</h3>
                <Section>
                    <h3>Update Username</h3>
                    <TextField sx={{marginRight: '10px;'}}placeholder='type new username' value={newUser} onChange={e => setNewUser(e.target.value) }/>
                    <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}} variant="contained" onClick={onUpdateAccount}>update</Button>
                </Section>
                <Section>
                    <h3>Delete Account</h3>
                    <Button sx={{backgroundColor: 'red', marginRight: '10px'}} variant="contained" onClick={onDeleteAccount}>Delete account</Button>
                </Section>
            </UserInfo>
        </MainSection>
        
    </Body> 
    );
}
 
export default Profile;

const Body = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    margin: 30px;
`
const ProfileImage = styled.img`
    width: 400px;
    height: 400px;
    
`
const UserInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    > h1 {
        align-self: center;
        margin-bottom: 20px;
    }
`
const MainSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > img {
        margin-right: 20px;
    }
`

const Section = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
    > * {
        margin-right: 10px;
    }
`