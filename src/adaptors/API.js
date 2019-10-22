const baseURL = 'http://localhost:3000/'
const signInURL = baseURL + 'login'
const validateURL = baseURL + 'validate'
const youURL = baseURL + 'you'
const newUsersURL = baseURL + 'signup'


const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())


const get = url => fetch(url, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}).then(resp => resp.json())


const signIn = user => post(signInURL, user )
const validate = () => get(validateURL)
const getYou = () => get(youURL)
const signUp = (user) => post(newUsersURL, user)

window.validate = validate //what does this do?


export default { signIn, validate, getYou, signUp }