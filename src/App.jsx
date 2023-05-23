import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // handle Click:
  const handleClick = () => {
    toast("Button is Clicked");
  };
  return (
    <div>
      <h3> React Toastify</h3>
      <button onClick={handleClick} className="btn btn-primary">
        Click Here
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
