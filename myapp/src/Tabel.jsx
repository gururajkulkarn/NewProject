import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Tabel = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/data").then((response) => {
      console.log(response.data);
      setColumns(Object.keys(response.data[0]));
      setRecords(response.data)
      .catch((error) => {
        console.log(error);
      });
    });
  }, []);

  return (

    <>
   <ToastContainer/>

      <div className="container mt-5">
        <div className="text-end">
          <Link to="/create" className="btn btn-primary">
            Add+
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                <Link to={`/update/${d.id}`} className="btn btn-success m-1">Edit</Link>
               <button onClick={e => handleDelete(d.id)} className="btn btn-danger">Delete</button>
               </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Outlet />

    </>

  );

  function handleDelete(id) {
    const conf = window.confirm("Do you want to delete");
    if(conf) {
      axios.delete('http://localhost:3000/data/'+id)
      .then(response => {
      toast.success("Record has been deleted")
      navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};

export default Tabel;
