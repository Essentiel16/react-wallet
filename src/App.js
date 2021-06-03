import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
      {/* <Button type="button" buttonStyle="btn--primary-solid">Sign up</Button>
      <Button type="button" buttonStyle="btn--primary-outline">Login</Button>
  <Button type="button" disabled="disabled" >Create User</Button> */}
    </div>
  );
}

export default App;
