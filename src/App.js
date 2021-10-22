
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Itemdetail from "./itemContainer/itemdetailContainer/itemdetail";
import { Cart } from "./components/cartContainer/cart";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Switch>
      
      <Route exact path="/" component = {Home}/>
      <Route exact path="/counter" component = {Counter}/>
      <Route exact path="/product/:id" component = {Itemdetail}/>
      <Route exact path="/cart" component = {Cart}/>
      
      </Switch>    
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
