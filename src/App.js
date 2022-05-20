import { BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
import Navlinks from './components/Navlinks';



function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Navlinks/>
    <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
