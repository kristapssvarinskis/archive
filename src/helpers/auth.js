import { defaultHeaders, bearerHeaders, apiMethod } from "./fetch"


function saveUserAuth(token){
    window.localStorage.setItem('accessToken', token)
}

function isUserLoggedIn(){
    if(window.localStorage.getItem('accessToken')){
        return window.localStorage.getItem('accessToken')
    }
    return false
}

function logOutUser(token){
    return apiMethod('/logout', {
       method: 'GET',
       headers: bearerHeaders(token)  
    }).then((data) => {
        window.localStorage.removeItem('accessToken')
        window.location.href="/"
        return data
    }).catch((error) => {
        console.log(error)
    })
}

function logInUser(loginData){
    return apiMethod('/login', {
        method: 'POST',
        headers: defaultHeaders(),
        body:   JSON.stringify(loginData)
    }).then((data) => {
        if(data.access_token){
            saveUserAuth(data.access_token)
            data.success=true
            return data
        }
        data.success=false
        return data
    }).catch((error) => {
        console.log(error)
    })
}

function registerUser(registerData){
    return apiMethod('/register', {
        method: 'POST',
        headers: defaultHeaders(),
        body:   JSON.stringify(registerData)
    }).then((data) => {
        return data
    }).catch((error) => {
        console.log(error)
    })
}

function getUser(){
    const userToken = isUserLoggedIn()
    const user = window.localStorage.getItem('user')
    if (user){
        if (!userToken){
            window.localStorage.removeItem('user')
        } else{
            return user  
        }
    }
    if (userToken){
        return apiMethod('/me', {
            method: 'GET',
            headers: bearerHeaders(userToken),
        }).then((data) => {
            if(data.firstName){
                window.localStorage.setItem('user', data)
                return data
            }
            return false
        }).catch((error) => {
            console.log(error)
        })
    }
}

export{
    saveUserAuth,
    isUserLoggedIn,
    logOutUser,
    logInUser,
    registerUser,
    getUser
}