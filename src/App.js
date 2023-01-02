import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Chat from './pages/chat/Chat';
import Profile from './pages/profile/Profile';
import CatFacts from './pages/catFacts/CatFacts';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import PrivateRoutes from './components/routes/PrivateRoutes';
import { firebaseAuth } from './services/firebase';
import { useDispatch } from 'react-redux';
import * as actions from './store/action/profileAC'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(actions.isAuth(true))
      } else {
        dispatch(actions.isAuth(false))
      }
    });
  }, [dispatch])

  return (
    
      <div className='container'>
        <BrowserRouter>
          <div className='appNavBar'>
            <Link to='/'>Home</Link>
          </div>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route 
                path='chats' 
                element={<PrivateRoutes component={<Chat />} />}
              />
              <Route path='chats'>
                <Route 
                  path=':chatID' 
                  element={<PrivateRoutes component={<Chat />} />}
                />
              </Route>
              <Route 
                path='profile' 
                element={<PrivateRoutes component={<Profile />} />}
              />
              <Route path='catFacts' element={<CatFacts />}/>
              <Route path='signin' element={<SignIn />}/>
              <Route path='signup' element={<SignUp />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>

  );
}

export default App;
