import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: 'select',
        password: '',
        password_confirmation: '',
        description: '', // Add a new property for the description
      });

      const handleDescriptionChange = (value) => {
        setFormData({ ...formData, description: value });
      };

      const onImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setFormData({ ...formData, images: selectedImages });
      };

      const handleDateChange = (date) => {
        setFormData({ ...formData, release_date: date });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <div>
        <h1>Create Product</h1>
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <label>Category:</label>
                <select name="category" id="category">
                    <option value="select" disabled>Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                </select>
                <label>Description:</label>
                <ReactQuill
                    value={formData.description}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                    style={{ height: '100px', marginBottom: '50px' }}
                />
                <label>Images: (max: 3)</label>
                <input
                    type="file"
                    multiple
                    name="images"
                    id="images"
                    onChange={onImageChange}
                />
                <div>
                    <label>Release Date:</label>&nbsp;
                    <ReactDatePicker
                    selected={formData.release_date}
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
                <button className="btn btn-block">Save</button>
            </form>
        </div>
    </div>
  )
}
export default ProductForm
