import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Table } from 'antd';


const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];




function App() {
const [ products, setProducts ] = useState([]);

  // Renders components twice because React.StrictMode is on 
  // StrictMode renders components twice(on dev but not in production) in order to detect any problems with the code
  // and warn about them
  useEffect(() => {
    getAllProducts()
    getOneProducts()
    createAProduct()
    updateAProduct()
    deleteAProduct()
  }, [])


  // get all products
  const getAllProducts = async () => {
    try {
      const GetAllProductsResponse = await axios.get("https://dummyjson.com/products") 
      console.log({GetAllProductsResponse})
      setProducts(GetAllProductsResponse.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  // get a product
  const getOneProducts = async () => {
    try {
      // (/1) is the id, which is path param
      const GetOneProductResponse = await axios.get("https://dummyjson.com/products/1") 
      console.log({GetOneProductResponse})
    } catch (error) {
      console.log(error)
    }
  }
  // create a product

  const createAProduct = async () => {
    try {
      const createProductResponse = await axios({
      method: 'post',
      url: 'https://dummyjson.com/products/add',
      data: {
        title: "Pencil Box"
      }
      })
      console.log({createProductResponse})
    }catch(error) {
      console.log(error)
    }
  } 

  // update a product
  const updateAProduct = async () => {
    try {
      const updateAProductResponse = await axios({
        method: 'put',
        url: 'https://dummyjson.com/products/1',
        data: {
          title: "Updated Pencil Box"
        }
        })
      console.log({updateAProductResponse})
    }catch(error) {
      console.log(error)
    }
  } 


  // delete a product
  const deleteAProduct = async () => {
    try {
      const deleteAProductResponse = await axios({
        method: 'delete',
        url: 'https://dummyjson.com/products/1',
    
        })
      console.log({deleteAProductResponse})
    }catch(error) {
      console.log(error)
    }
  } 

  return (
    <div className="App">
      <Table dataSource={products} columns={columns} />;
      <div>
        <span ><b>Total count of Products: {products.length}</b></span>
      </div>
    </div>
  );
}

export default App;
