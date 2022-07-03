// const URL_BASE = 'http://localhost:3000/'

//GET -----------------------------------------------------
//get user scores
export const autoLogin = () => {
    let infoPack =  fetch(`/me`)
                    .then(res => res.json())
                    .catch(()=> false)
    
    return infoPack
}

export const getCourses = () => {
    let infoPack = fetch('/my-courses')
                    .then(res=> res.json())
                    .catch(()=> false)
    return infoPack
}


//POST ----------------------------------------------
//post response login 
export const fetchLogIn = (body) => {
    let infoPack = fetch(`/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(err=>console.log(err))

    return infoPack
}

export const fetchSignUp = (body) => {
    let infoPack = fetch(`/signup`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .catch((err)=>console.log(err))

    return infoPack
}

export const joinPlan = (typeOfPlan) => {
    let body = {
        title: typeOfPlan
    }
    let infoPack = fetch(`/join-plan`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .catch((err)=>console.log(err))

    return infoPack
}


///UPDATE ---------------------------
//update username

export const updateUsername = (newUsername) => {
    let infoPack = fetch('/user',{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({new_username: newUsername})
    })
    .then(res => res.json())
    .catch(()=>false)

    return infoPack
}

//DELETE ---------------------------------------------
//delete user
export const fetchLogOut = async() => {
    return await fetch(`/logout`,{
        method:'DELETE',
    })
    .then(()=>true)
    .catch(()=>false)
}

export const deleteAccount = async() => {
    return await fetch('/delete-account',{
        method:'DELETE'
    })
    .then(()=> true)
    .catch(()=> false)
}