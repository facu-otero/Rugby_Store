import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import CardContainers from "./containers/CardContainers";
import ItemCount from "./itemContainer/itemCount/ItemCount"

function App() {
  return (
    <div>
      <NavBar />
      <Header name="Facundo" />
      <ItemCount />
      <CardContainers />
    </div>
  );
}

export default App;
