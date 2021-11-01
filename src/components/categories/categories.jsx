import * as React from "react";
import "./categories.css";
import { getFirestore } from "../../firebase";

const Categories = ({ setSelectedCategory }) => {
  /*  const [categories, setCategories] = React.useState([]); */
  const [data, setData] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = db.collection("categories");
    setCargando(true);
    categoriesCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("no hay productos");
        } else {
          setData(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch((error) => setError(error))
      .finally(() => setCargando(false));
  }, []);

  /*  React.useEffect(() => {
        fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data));
}, []); */
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <select defaultValue="" onChange={handleChange} id="category">
        <option value="" disabled>
          Categorías
        </option>
        {cargando && <p>...Cargando productos...</p>}
        {error && <p>Ha habido un error: {error.status}</p>}
        {data?.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
        <option value="">Ver todos</option>
      </select>
    </div>
  );
};

export default Categories;
