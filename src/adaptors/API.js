const baseURL = 'http://localhost:3000/'
const signInURL = baseURL + 'login'
const validateURL = baseURL + 'validate'


const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    // Authorization: 6,
      token: localStorage.getItem('token'),
      smile: 'yahyah'
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

window.validate = validate


export default { signIn, validate }