import axios from 'axios';
import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'


const Login = ({login}) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [loggedIn,setLoggedIn] = useState(false)
    const buttonOnClick = (event) =>{
        axios.post('login',
        {
            'name': name,
            'password' : pass
        }).then(res =>{
            localStorage.setItem("token",res.data.token)
            login(true)
        }, (error)=>{
            console.log(error)
        })
    }
    return (
    <>
    <div className='register form-control'> 
      <h1>Login</h1>  
      <Form>
          <Form.Field>
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
          </Form.Field>
          <Form.Field>
          <label>Password</label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='Password' />
          </Form.Field>
          <Button className='btn'type='submit' onClick={buttonOnClick}>Submit</Button>
      </Form>
    </div>
    </>

    )
}

export default Login
