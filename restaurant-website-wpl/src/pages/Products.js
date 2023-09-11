import React from 'react';
const Products = ({ heading, data }) => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl text-center my-0">{heading}</h1>
      <div className="flex flex-wrap justify-center mx-auto">
        {data.map((product, index) => (
          <div key={index} className="m-4 w-72">
            <img
              src={product.img}
              alt={product.alt}
              className="h-72 w-full object-cover shadow-md"
            />
            <div className="text-center p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mb-2">{product.desc}</p>
              <p className="text-2xl mb-2">${product.price}</p>
              <button className="bg-red-500 hover:bg-yellow-500 text-white py-2 px-4 rounded-full">
                {product.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <a href="/pizza" className="text-white text-2xl text-center block mt-10">
        More &rarr;
      </a>
    </div>
  );
};

export default Products;
