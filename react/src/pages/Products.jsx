import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from "../axios-client";

const Products = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   getProducts();
    // }, []);

    // const getProducts = () => {
    //   setLoading(true);
    //   axiosClient.get('/products')
    //   .then(({data}) => {
    //     setProducts(data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setLoading(false);
    //     console.log(err);
    //   })
    // }

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>Products</h1>
            <Link to="/products/new" className="btn-add">New Product</Link>
        </div>
        <div className="card">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
      </div>
    </div>
  )
}
export default Products
