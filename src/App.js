import './App.css';
import Chatbot from './Components/Chatbot';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Chatbot/>
    </div>
  );
}

export default App;
