import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const Editform = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handlesubmit = (event) => {
    event.preventDefault();

    axios.put("http://localhost:3000/data/" + id, data).then((response) => {
      alert("DATA UPDATED Successfully");
      navigate("/");
    });
  };

  return (
    <>

      <div className="container mt-5">
        <form onSubmit={handlesubmit}>
          <div className="container">
            <label>Firstname</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <button className="btn btn-warning">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Editform;
