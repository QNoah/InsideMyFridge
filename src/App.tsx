import "./App.css";
import ProductCard from "./Components/ProductCard";

function App() {

  return (
    <>
      <ProductCard product={{id: 1, name: "Pancakes", price: 2.00}}></ProductCard>
      <ProductCard product={{id: 2, name: "Eggs", price: 1.20}}></ProductCard>
    </>
  );
}

export default App;
