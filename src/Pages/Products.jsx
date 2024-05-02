import React, { useState, useEffect } from 'react';
import { MdDiscount, MdOutlineStar } from 'react-icons/md';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let request = await fetch("https://dummyjson.com/products")
      let response = await request.json()
      setProducts(response.products)
      setLoading(true)
    }

    fetchData()
  }, []);

  const truncateDescription = (description, maxLength) => (
    description.length > maxLength ? `${description.substring(0, maxLength - 3)}...` : description
  );

  return (
    loading
    ?
    <div className='max-w-[85%] mx-auto my-10'>
      <p className='font-bold text-[30px] mb-[20px] text-white'>Products</p>
      <div className='flex flex-wrap gap-[20px] justify-center'>
      {products.map((product, id) => (
        <div key={id} className="flex bg-white justify-between w-[300px] h-[450px] flex-col rounded-xl shadow-lg shadow-slate-600 ">
        <img src={product.thumbnail} alt="" className='w-[300px] h-[150px] rounded-t-lg'/>
        <div className='flex flex-col p-4 gap-[10px]'>
        <p className='font-bold text-[19px] text-[#47a51f]'>{product.title}</p>
        <p className='text-[15px] text-gray-500'>{truncateDescription(product.description, 62)}</p>
        <p className='flex items-center gap-1 text-[15px]' >Rating: {product.rating}<MdOutlineStar color="#FFA500" size="20"/></p> 
        <div className='flex justify-between'>
        <p className='flex items-center text-[15px] gap-1 text-white bg-red-500 rounded-lg px-2 font'><MdDiscount />{product.discountPercentage}%</p>
        <p >In-stock: <span className='font-bold text-[15px]'>{product.stock}</span></p>
        </div>
        <p className='text-[20px]'>Price: <span className='font-bold'>${product.price}</span></p>
        <button className='flex items-center justify-center  bg-[#47a51f] text-white px-10 py-2 rounded-lg hover:bg-[#47a51f] transition active:scale-95'>Buy</button>
        </div>
      </div>
      ))}
    </div>
    </div>
    :
    <div className='flex items-center justify-center h-screen'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Products;
