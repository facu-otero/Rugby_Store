import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import CardContainers from "./containers/CardContainers";


function App() {
  return (
    <div>
      <NavBar />
      <Header name="Facundo" />
      <CardContainers />
    </div>
  );
}

export default App;
