import { useState } from "react"
function Dashboard() {
    
  
  const [data, setData]= useState({name:'',email:''}); 
    function HandleChange(e){
      const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    }


    const HandleSubmit = async(e) => {
          e.preventDefault();
          console.log(data);
      };


  return (<>
  
    <div className="max-w-sm mx-auto my-10 p-6 flex items-center bg-slate-500 rounded-md shadow-md ">
      <form onSubmit={HandleSubmit}>
        <div className="mb-4">
        <label htmlFor="name" required className="block font-bold">Name</label>
        <input type="text" name="name" id="name" value={data.name} onChange={HandleChange} className="w-sm block  border px-2 rounded-md"/>
        <label htmlFor="email" required className="block font-bold">email</label>
        <input type="text" name="email" id="email" value={data.email} onChange={HandleChange} className="w-sm block  border px-2 rounded-md"/>
       
        <input type="submit" value="Submit" className=" bg-rose-600" />
        </div>
      </form>
     
    </div>
    <div>
        <p>Name : {data.name}</p>
        <p>Email : {data.email}</p>
      </div>
    </>
  )
}

export default Dashboard