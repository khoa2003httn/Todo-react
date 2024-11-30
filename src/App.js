import logo from './logo.svg';
import './App.css';
import Todolist from './Todo/Todolist';
 // Import ToastContainer nếu chưa làm
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <header className="App-header gap-4">
        <h1 className="App-title" >Sâm By Grup </h1>
        
        <Todolist/>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="bounce"  // Sửa từ transition: Bounce, thành transition="bounce"
      />
    </div>
  );
}

export default App;
