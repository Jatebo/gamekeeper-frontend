import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Switch>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
