import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [shoes, setShoes] = useState([]);
  const [newShoe, setNewShoe] = useState({
    name: '',
    img: '',
  });

  const getItems = async () => {
    try {
      const response = await axios.get("https://6515830edc3282a6a3ce8a44.mockapi.io/shoes");
      setShoes(response.data);
      console.log(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const addShoe = async () => {
    try {
      const response = await axios.post("https://6515830edc3282a6a3ce8a44.mockapi.io/shoes", newShoe);
      setNewShoe({ name: '', img: '' }); 
      getItems(); 
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteShoe = async (id) => {
    try {
      await axios.delete(`https://6515830edc3282a6a3ce8a44.mockapi.io/shoes/${id}`);
      getItems(); // 
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="add-shoe-form">
        <h3>Add a New Shoe</h3>
        <input
          type="text"
          placeholder="Name"
          value={newShoe.name}
          onChange={(e) => setNewShoe({ ...newShoe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newShoe.img}
          onChange={(e) => setNewShoe({ ...newShoe, img: e.target.value })}
        />
        <button onClick={addShoe}>Add</button>
      </div>
      <div className="shoe-list">
        {shoes.map((item) => (
          <div key={item.id} className="shoe-item">
            <ul>
              <li>{item.name}</li>
              <li>
                <img src={item.img} alt={item.name} />
              </li>
              <li>
                <button onClick={() => deleteShoe(item.id)}>Delete</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
