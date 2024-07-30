import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from 'react-hot-toast';
import "./index.css";
import { AuthProvider } from "./context/AuthenticationContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
    <App />
  </AuthProvider>
);
