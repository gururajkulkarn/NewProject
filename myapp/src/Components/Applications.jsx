import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const Applications = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:5000/apllcnform')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedFilter(e.target.value);
    setFilter(''); // Clear the text filter when selecting a dropdown option
  };

  const filteredData = data.filter(item => {
    if (selectedFilter === 'all') {
      return true; // Show all data if "All" is selected
    }

    // Add your specific filtering logic based on the selected dropdown option
    // For example, you can filter by gender, education, etc.
    return item.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <>
    <Link to="/apform"><button className='btn btn-primary m-4'>Back</button> </Link>
      <div className='mt-4' style={{ color: "green", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Total Candidates Applied</h1>
        <select value={selectedFilter} onChange={handleDropdownChange} className="select"  multiple>
          <option value="all">All</option>
          <option value="friend">Friend</option>
          <option value="relative">Relative</option>
          {/* Add more options as needed */}
        </select>
        {/* {selectedFilter !== 'all' && (
          <input
            type="text"
            placeholder={`Filter by ${selectedFilter}`}
            value={filter}
            onChange={handleFilterChange}
            className="ml-2"
          />
        )} */}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <table className="table m-5 w-75">
          <thead>
            <tr>
              <th scope="col">SI No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Mobile</th>
              <th scope="col">Category</th>
              <th scope="col">Education</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.dob}</td>
                <td>{item.mobile}</td>
                <td>{item.category}</td>
                <td>{item.edu}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.state}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

<Outlet/>



    </>
  );
};

export default Applications;
