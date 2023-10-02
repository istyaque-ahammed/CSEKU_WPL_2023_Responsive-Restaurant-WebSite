import { AiFillDelete,AiFillEdit} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState,  useEffect } from "react";
function ShowData({ show }) {
  
    const navigate = useNavigate();
    async function HandleAdd(){
          navigate('/add');
    }
   async function HandleClick(itemID) {
                 
                await axios.delete(`http://localhost:2000/dataDel/${itemID}`)
                .then((res) => {
                 
                    console.log(res);
                })
                .catch((err) => console.error(err));
                navigate("/admin");
    }

    return (
      <div>
        <div>
          <div>
            <h1 className="text-xl font-bold">Data List</h1>
          </div>
          <div>
            <div>
              <button name="Add" className="border-2  text-bold" onClick={HandleAdd}>Add Item</button>
            </div>
            <table className=" border border-slate-400">
              <thead>
              <tr className=" border border-slate-400">
                <th className="p-2 border border-slate-600">Name</th>
                <th className="p-2 border border-slate-600">Description</th>
                <th className="p-2border border-slate-600">Brand</th>
                <th className="p-2 border border-slate-600">Price</th>
                <th className="p-2 border border-slate-600">Discount</th>
                <th className="p-2 border border-slate-600">Category</th>
                <th className="p-2 border border-slate-600">Rating</th>
                <th className="p-2 border border-slate-600">ImagePath</th>
                <th className="p-2 border border-slate-600">Edit</th>
                <th className="p-2 border border-slate-600">Delete</th>
              </tr>
              </thead>
              <tbody>
                { show.map((item, index) => {
                    
                      // Serialize the itemData object to JSON
                      const serializedItemData = JSON.stringify(item);
                    
                  return (
                    <tr key={index} className="border border-slate-600">
                      <td className="border border-slate-600">{item.name.length > 10 ? item.name.substring(0, 10) + '...' : item.name}</td>
                      <td className="border border-slate-600"> {item.description.length > 20 ? item.description.substring(0, 20) + '...' : item.description}</td>
                      <td className="border border-slate-600">{item.brand}</td>
                      <td className="border border-slate-600">{item.price}</td>
                      <td className="border border-slate-600">{item.discount}</td>
                      <td  className="border border-slate-600">{item.category}</td>
                      <td  className="border border-slate-600">{item.rating}</td>
                      <td  className="border border-slate-600">{item.imageUrl}</td>
                      <td className="border border-slate-600">
                          
                          <NavLink to={`/Edit/?data=${encodeURIComponent(serializedItemData)}`}>
                            <AiFillEdit />
                          </NavLink>
                        </td>
                        <td className="border border-slate-600">
                        <button type="button" onClick={() => HandleClick(item._id)} ><AiFillDelete/> </button>
                        </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  export default ShowData;
  