import {useDispatch} from 'react-redux'
import { LoginAction } from '../Store/Authentication'

const LoginForm = () => {
const dispatch = useDispatch()
  return (
  <section>

    <div>
      <h2>Login</h2>
      <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password'/>
            <button  onClick={(e)=> {
              e.preventDefault()
              dispatch(LoginAction.login())
              }} type='submit'>Login</button>
      </form>
    </div>
   
  </section>
  )
}

export default LoginForm