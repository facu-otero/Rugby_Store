
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component = {Home}/>
      <Route exact path="/counter" component = {Counter}/>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
