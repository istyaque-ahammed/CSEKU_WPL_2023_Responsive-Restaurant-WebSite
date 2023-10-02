import { useEffect, useState } from "react";
import axios from "axios";
import ShowData from "./ShowData";

const MainBoard = () => {
  const [col, setCol] = useState([]);
  const [data, setData] = useState([]);
  const [collectionValue, setCollection] = useState("NewArrivals");

  const ChangeCollection = (e) => {
    setCollection(e.target.value);
  };

  const GetData = async () => {
    await axios
      .post("http://localhost:2000/coll", { value: collectionValue })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchData = async () => {
    const collections = await fetch("http://localhost:2000/collections");
    const jsonFile = await collections.json();
    setCol(jsonFile);
  };

  const fetchAllData = async () => {
    const collection = await fetch("http://localhost:2000/data");
    const jsonFile = await collection.json();
    setData(jsonFile);
  };

  useEffect(() => {
    GetData();
    fetchData();
    fetchAllData();
  }, [collectionValue]);

  return (
    <div>
      <div className="w-full block m-auto bg-blue">
        <div className="block">
          <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4 shadow-md bg-sky-500">
            <div>
              <h1 className="text-3xl font-bold p-5 text-center">Category</h1>
              <div className="flex items-center flex-col border-blue">
                {col.map((item, index) => (
                  <input
                    type="button"
                    className="text-xl rounded-l p-4 m-5 py-5 bg-white"
                    key={index}
                    value={item}
                    onClick={ChangeCollection}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-3/4 shadow-xl bg-slate-300 p-5">
            <h2 className="text-2xl font-bold"></h2>
            <hr />
            <div>
              <ShowData show={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
