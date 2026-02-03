import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5098/api/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Kunde inte hämta produkter");
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
   <div className="container">
      <h1>Manero Frontend</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> – {product.price} kr
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;