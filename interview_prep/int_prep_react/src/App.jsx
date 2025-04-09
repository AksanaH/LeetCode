import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        return res.json();
      })

      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredProducts);
  return (
    <div>
      <h1>Fake Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
