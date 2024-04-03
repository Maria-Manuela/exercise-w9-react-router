import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import Logos from "./components/Logos";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Logos />
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
