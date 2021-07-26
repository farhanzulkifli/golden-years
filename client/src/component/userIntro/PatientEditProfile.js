import React from "react";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../../../App";

const PatientEditProfile = () => {
	const contextData = useContext(dataContext);
	const states = contextData.states;
	console.log(states);
	const [data, setUserData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			// Please change the localhose number according to your server port number
			const response = await fetch("http://localhost:3333/api/user", {
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			console.log(response);
			const data = await response.json();
			setUserData(data);
		};
		getData();
	}, []);

	return (
		<>
			<div>
				{data.map((userElement) => {
					return (
						<div key={userElement._id}>
							<div>{userElement.name}</div>
							<div>{userElement.email}</div>
							<div>{userElement.password}</div>
							<div>{userElement.photo}</div>
							<div>{userElement.age}</div>
							<div>{userElement.gender}</div>
							<div>{userElement.height}</div>
							<div>{userElement.weight}</div>
							<div>{userElement.healthCondition}</div>
							<div>{userElement.myDoctor}</div>
							<br />
						</div>
					);
				})}
			</div>
			<button>Save Changes</button>
		</>
	);
};

export default PatientEditProfile;
