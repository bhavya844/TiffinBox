import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from 'react-hot-toast';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
    <App />
  </>
);
