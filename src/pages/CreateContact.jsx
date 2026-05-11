// Import necessary components from react-router-dom and other parts of the application.
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook htmlFor accessing the global state.
import { createContact, getAgenda } from "../services/fetch";
import { useState, useEffect } from "react";


export const CreateContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: ''
  })

  const handleChange = (e) => {
    console.log(e.target.id)
    setFormData({ ...formData, [e.target.id]: e.target.value })
    console.log(formData)
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    createContact(formData, dispatch)
    navigate('/')
  }

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <h2>Add a new contact</h2>

          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input onChange={handleChange} type="text" className="form-control" id="name" placeholder="Name" required></input>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input onChange={handleChange} type="email" className="form-control" id="email" placeholder="Email" required></input>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
            <input onChange={handleChange} type="tel" className="form-control" id="phone" placeholder="Phone" required></input>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="form-label fw-semibold">Address</label>
            <input onChange={handleChange} type="text" className="form-control" id="address" placeholder="Address" required></input>
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-primary col-md-8 col-lg-6">
           Save
          </button>
          <Link to="/" className="btn btn-link text-decoration-none ms-3">
            or get back to contacts
          </Link>
        </div>
      </div>
    </form>
    </section>
  );
};
