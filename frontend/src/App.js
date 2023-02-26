import data from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./ProductScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">MANSHA</a>
        </header>
        <main>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen/>}></Route>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
