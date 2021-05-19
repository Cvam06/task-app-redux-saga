import './App.css';
import Header from "./components/shared/Header/Header.jsx"
import Footer from "./components/shared/Footer/Footer.jsx"
import TaskManager from "./components/shared/TaskManager/TaskManager.jsx";
import Login from "./components/shared/Login/Login.jsx";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <TaskManager />
          {/* <Login /> */}
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
