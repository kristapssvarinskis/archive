async function apiMethod(endpoint, requestParams){
    const response = await fetch('http://127.0.0.1:8000/api'+endpoint, requestParams)
    const data =  await response.json()
    return data;
}

const defaultHeaders = () => {
    return {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        accept: "application/json",
    }
}

const bearerHeaders = (token) => {
    return {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
    }
}

export{
    defaultHeaders,
    bearerHeaders,
    apiMethod
}