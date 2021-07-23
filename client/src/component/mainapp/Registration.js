import React from "react";

const Registration = () => {
	return (
		<div>
			<form>
				<input type="radio" name="user" id="patient" value="Patient" />
				<input type="radio" name="user" id="doctor" value="Doctor" checked />
				<br />
				<br />
				<label>Name:</label>
				<br />
				<input
					type="text"
					name="name"
					id="name"
					placeholder="John Smith"
					required
				/>
				<br />
				<br />
				<label>Email:</label>
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="johnsmith@gmail.com"
					required
				/>
				<br />
				<br />
				<label>Confirm email:</label>
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="johnsmith@gmail.com"
					required
				/>
				<br />
				<br />
				<label>Password:</label>
				<br />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="************"
					required
				/>
				<br />
				<br />
				<label>Confirm password:</label>
				<br />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="************"
					required
				/>
				<br />
				<br />
				<input type="submit" value="Create Account" />
			</form>
		</div>
	);
};

export default Registration;