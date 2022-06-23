import React from 'react';


const LogIn = ({formData, onChange, onSubmit, error}) => {
    let {username, password} = formData

    return ( 
    <div className='auth'>
        <form className='auth-form' onSubmit={(e)=>onSubmit(e, 'login')}>
            <input name='username' type='text' placeholder='username' value={username} onChange={onChange}/>
            <input name='password' type='password' placeholder='password' value = {password} onChange={onChange}/>
            <button>Log In</button>
        </form>
        {error? <p>{error}</p> : null}
    </div>
    );
}
 
export default LogIn;