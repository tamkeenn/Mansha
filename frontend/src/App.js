import data from "./data";
function App() {
  return (
    <div>
      <header>
        <a href="/">MANSHA</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((product) => (
          <div>
            <img src={product.images} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
