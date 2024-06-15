import { configureStore} from '@reduxjs/toolkit';
import Auth from './Authentication.js';

 const names = configureStore({
    reducer: {Auths:Auth},
 })


export default names;




