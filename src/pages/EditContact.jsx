import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { editContact } from "../services/fetch"
import useGlobalReducer from "../hooks/useGlobalReducer";




export const EditContact = () => {
    const location = useLocation()
    const { store, dispatch } = useGlobalReducer()

    //const { store, dispatch } = useGlobalReducer()
    const [contact, setContact] = useState({
        name: '', phone: '', email: '', address: ''
    })

    useEffect(() => {
        if (location.state.contact) {
            setContact(location.state.contact)
        }

    }, [location])

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.id]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        editContact(contact, dispatch)
        navigate('/')
    }

    return (
        <section>
            <form onChange={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h2>Edit contact</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold">Name</label>
                            <input onChange={handleChange} type="text" id="name" className="form-control" value={contact.name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">Email</label>
                            <input onChange={handleChange} type="text" id="email" className="form-control" value={contact.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
                            <input onChange={handleChange} type="text" id="phone" className="form-control" value={contact.phone} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label fw-semibold">Address</label>
                            <input onChange={handleChange} type="text" id="address" className="form-control" value={contact.address} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-primary col-md-8 col-lg-6">
                            Edit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );

};

