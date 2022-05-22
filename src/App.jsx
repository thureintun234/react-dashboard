import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Routers from "./Routers";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="layout__content">
          <Topbar />
          <div className="layout__content-main">
            <Routers />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
