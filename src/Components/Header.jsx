import {useSelector,useDispatch} from 'react-redux';
import { LoginAction } from '../Store/Authentication';
const Header = () => {
   // yung Auth galing sa main ile sa conigStire then yung 
   //Credentials is from the obbject na ginawa mo dom sa file ng
  //Authentication
const Credential = useSelector(state => state.Auths.Credentials)
const dispatch = useDispatch(); 
  return (
    <header>
      <h4>InDecrementialist</h4>
{
  Credential &&
  <ul>
        <li>Home</li>
        <li>About</li>
        <button onClick={(e)=>{
               e.preventDefault();
               dispatch(LoginAction.logOut())
        }}>Logout</button>
      </ul>
}
      
    </header>
  )
}

export default Header