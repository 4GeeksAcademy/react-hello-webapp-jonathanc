import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { deleteAgenda, getAgenda, getAllUsers } from "../services/fetch.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noAvatarImageUrl from "../assets/img/no-avatar.jpg";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const { contacts } = store
	useEffect(() => {
		
		getAgenda(dispatch)
	}, []);
	
	return (
		<section>
			{
				contacts.map((contact) => {
					console.log(contact)
					return (
		
					//cargar componenete contactcard utilizando props
					
						<div key={contact.id} className="container list-group-item p-3 border shadow-sm mb-2">
							<div className="row align-items-center">
								<div className="col-auto">
							<Link to={"/single/:theId"}>
									<img src={noAvatarImageUrl} alt="avatar" className="imageCard"></img>
							</Link>
								</div>
								<div className="col ms-2">
									<h5 className="mb-2 fw-bold text-dark">{contact.name}</h5>
									<div className="text-secondary mb-1">
										<i className="fa-solid fa-location-dot"></i> {contact.address}
									</div>
									<div className="text-secondary mb-1">
										<i className="fa-solid fa-phone-flip"></i> {contact.phone}
									</div>
									<div className="text-secondary">
										<i className="fa-solid fa-envelope"></i> {contact.email}
									</div>
								</div>

								<div className="col-auto align-self-start d-flex gap-3">
									<Link to={`/edit/${contact.id}`} state={{contact:contact}} className="btn btn-link p-0 text-dark">
										<i className="fa-solid fa-pencil"></i>
									</Link>
									<button className="btn btn-link p-0 text-dark" onClick={() => deleteAgenda(contact.id, dispatch)}>
										<i className="fa-solid fa-trash-can"></i>
									</button>
								</div>

							</div>
						</div>
					
					);
				})
			};
		</section>		
	);
}; 