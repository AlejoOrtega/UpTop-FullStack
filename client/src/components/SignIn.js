import React from 'react';


const SignIn = ({formData, onChange, onSubmit, error}) => {
    let {username, password, password_confirmation} = formData
    return ( 
    <div className='auth'>
        <form className='auth-form' onSubmit={(e)=>onSubmit(e,'signin')}>
            <input name='username' type='text' placeholder='username' value={username} onChange={onChange}/>
            <input name='password' type='password' placeholder='password' value = {password} onChange={onChange}/>
            <input name='password_confirmation' type='password' placeholder='repeat password' value={password_confirmation} onChange={onChange}/>
            <button>Sign In</button>
        </form>
    </div>
    );
}
 
export default SignIn;