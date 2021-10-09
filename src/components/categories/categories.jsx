import * as React from 'react';
import "./categories.css"

const Categories = ({setSelectedCategory}) => {
    const [categories, setCategories] = React.useState([]);

       React.useEffect(() => {
        fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data));
}, []);
const handleChange = (e) =>{
    setSelectedCategory(e.target.value);
    console.log(e.target.value)
};

    return (
        <div>
            <select defaultValue="" onChange={handleChange} id="category">
                <option value="" disabled>Categorías</option>
                {categories?.map((category) => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                    
                ))}
                <option value="">Ver todos</option>
            </select>
            
        </div>
    );
};

export default Categories
