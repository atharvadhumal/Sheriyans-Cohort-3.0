import React from "react";

const Form = () => {

  const [formData, setFormData] = useState({});

  return (
    <div className="w-80 h-screen">
      <form className="flex p-6 rounded bg-white flex-col gap-4">
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select category:</span>
        <select className='p-2 border border-gray-400 rounded'>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          <option value="Kids">Kids</option>
        </select>
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Create</button>
      </form>
    </div>
  );
};

export default Form;
