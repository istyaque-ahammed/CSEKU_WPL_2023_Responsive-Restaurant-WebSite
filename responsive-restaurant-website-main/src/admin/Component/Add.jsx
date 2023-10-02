import axios from "axios";
import { useParams ,useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

 const Add=()=> {
  

  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
    console.log(formData)
  }
    
    const FormSubmit = (e) => {
        console.log(formData)
      e.preventDefault();
      axios
        .post("http://localhost:2000/add", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
        navigate('/admin')
    }
    
  return (
        <div>
             <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Product Information Form</h1>
      <form onSubmit={FormSubmit}>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Name:</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" value={formData.name}
            onChange={handleInputChange} required />
        </div>
          <div  className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold" >
            Description
          </label>
          <textarea
            name="description"
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
            cols={40}
            value={formData.description}
            onChange={handleInputChange} required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-semibold">Category:</label>
          <input type="text" id="category" name="category" className="w-full px-3 py-2 border rounded-md" 
            value={formData.category}
            onChange={handleInputChange}  required />
        </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-semibold">Price:</label>
            <input type="text" id="price" name="price" className="w-full px-3 py-2 border rounded-md" 
              value={formData.price}
              onChange={handleInputChange} required />
          </div>

       

        
        

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-semibold">ImageURl:</label>
          <input type="text" id="path" name="imageUrl" className="w-full px-3 py-2 border rounded-md" 
            value={formData.imageUrl}
            onChange={handleInputChange} required />
        </div>
        

        <div className="mb-4">
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </div>
      </form>
    </div>
        </div>
  )
}
export default Add;