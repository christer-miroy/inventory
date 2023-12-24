import { Link } from "react-router-dom"

const Products = () => {
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
