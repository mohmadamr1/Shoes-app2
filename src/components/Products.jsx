import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Products = () => {
    const [shoes, setShoes] = useState([]);
    const getItems = async () => {
        try {
          const response = await axios.get("https://6515830edc3282a6a3ce8a44.mockapi.io/shoes")
    
          console.log(response)
          setShoes(response.data);
        } catch (error) {
            throw new Error(error)
        }
      };
    
      useEffect(() => {
        getItems();
      }, []);
    return (
        <div>
          {shoes.map((item) => 
          <ul>
            <li>
              {item.name}
            </li>
            <img src= {item.img} alt={item.name}/>
            
            
          </ul>
          )}
        </div>
    );
}

export default Products;