import React, { useState } from 'react';

const ModuleForm = () => {
  const [form, setForm] = useState({
    moduleName: '',
    moduleCode: '',
    description: '',
    credits: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateCredits = (credits) => /^[0-9]+$/.test(credits);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCredits(form.credits)) {
      alert('Form Submitted');
    } else {
      alert('Invalid Credits');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Module Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Module Name Input */}
        <div>
          <label htmlFor="moduleName" className="block text-sm font-medium text-gray-700">
            Module Name
          </label>
          <input
            type="text"
            name="moduleName"
            value={form.moduleName}
            onChange={handleChange}
            placeholder="Enter module name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Module Code Input */}
        <div>
          <label htmlFor="moduleCode" className="block text-sm font-medium text-gray-700">
            Module Code
          </label>
          <input
            type="text"
            name="moduleCode"
            value={form.moduleCode}
            onChange={handleChange}
            placeholder="Enter module code"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter module description"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="3"
          ></textarea>
        </div>

        {/* Credits Input */}
        <div>
          <label htmlFor="credits" className="block text-sm font-medium text-gray-700">
            Credits
          </label>
          <input
            type="text"
            name="credits"
            value={form.credits}
            onChange={handleChange}
            placeholder="Enter module credits"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModuleForm;
