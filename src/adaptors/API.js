const baseURL = 'http://localhost:3000/'
const signInURL = baseURL + 'login'


const post = (url, data) => {
    return fetch(url, {
        method: "POST", 
        headers: { 'Content-Type': 'application/json' },
        body:  JSON.stringify( data )
    }).then(resp => resp.json())
}


const signIn = user => post(signInURL, user )


export default { signIn }