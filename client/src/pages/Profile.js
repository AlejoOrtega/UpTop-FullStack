import React, {useState} from 'react';
import { deleteAccount, updateUsername } from '../components/utils/fetchs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUser, logOut } from '../components/utils/stores/user';

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [newUser, setNewUser ] = useState('')
    const onDeleteAccount = () => {
        let response = deleteAccount()
        dispatch(logOut())
        navigate('/')
        
    }

    const onUpdateAccount = async() => {
        let response = await updateUsername(newUser)
        console.log(response)
        dispatch(saveUser(response.username))
    }

    return ( 
    <>
        <h1>Change username</h1>
        <input placeholder='type new username' value={newUser} onChange={e => setNewUser(e.target.value) }/>
        <button onClick={onUpdateAccount}>update</button>
        <button onClick={onDeleteAccount}>Delete account</button>
    </> 
    );
}
 
export default Profile;