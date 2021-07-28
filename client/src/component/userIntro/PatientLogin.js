import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../App";

const PatientLogin = () => {
	const data = useContext(dataContext);
	const dispatch = data.dispatch;
	const history = useHistory();
	const [errorMessage, setMessage] = useState("Please enter your details");
	const handleUserLogin = (event) => {
		event.preventDefault();
		const userEmail = event.target.email.value;
		const userPassword = event.target.password.value;
		const sendData = async () => {
			// Please change the localhost number according to your server port number
			const response = await fetch("/api/session/new", {
				method: "POST",
				mode: "cors",
				body: JSON.stringify({
					password: userPassword,
					email: userEmail,
				}),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			console.log("logging in");
			if (response.status === 400) {
				const data = await response.json();
				console.log("data", data.error);
				setMessage(data.error);
			} else if (response.status === 200) {
				const data = await response.json();
				dispatch({ type: "PUSHPATIENTID", payload: data._id });
				history.push("/home/myperformance");
			}
		};
		sendData();
	};
	return (
		<>
			<form onSubmit={handleUserLogin}>
				<div className="field">
					<label className="label is-size-4 has-text-centered">Email:</label>
					<div className="control has-icons-left has-icons-right">
						<input
							className="input is-primary has-text-centered"
							type="email"
							name="email"
							id="email"
							placeholder="Email address"
							required
						/>
						<span className="icon is-left">
							<i className="fas fa-envelope"></i>
						</span>
						<span className="icon is-right">
							<i className="fas fa-check"></i>
						</span>
					</div>
				</div>

				<div className="field">
					<label className="label is-size-4 has-text-centered">Password:</label>
					<div className="control has-icons-left has-icons-right">
						<input
							className="input is-primary has-text-centered"
							type="password"
							name="password"
							id="password"
							placeholder="Enter password"
							required
						/>
					</div>
				</div>

				<br />
				<div className="field container">
					<div className="control">
						<button className="button is-link">Enter</button>
					</div>
				</div>
				<div className="error-message">{errorMessage}</div>
			</form>
		</>
	);
};

export default PatientLogin;
