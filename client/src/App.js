import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Single from "./pages/single/Single"
import Write from './pages/write/Write'
import Register from './pages/register/Register'
import Post from './components/post/Post'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return(
    <BrowserRouter>
    <TopBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="settings" element={user ? <Settings /> : <Register />} />
          <Route path="write" element={user ? <Write /> : <Register />} />

          <Route path="post">
          <Route index element={<Post />} />
          <Route path=":postId" element={<Single />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
