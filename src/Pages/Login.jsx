import React from "react";
import "./css/Login_style.css";
const Login = () => {
	return (
		<div className="login_body">
			<div className="Login">
				<div className="login_container">
					<h1> Sign up</h1>
					<div className="input_field">
						<input className="inp" placeholder="Your Name" />
						<input className="inp" placeholder="Email Adress" />
						<input className="inp" placeholder="Password" />
					</div>
					<button>Continue</button>
					<p className="font_1">
						Already have an account?{" "}
						<span className="font_2">Login here</span>
					</p>
					<div className="select_box">
						<input className="mycheckbox" type="checkbox" />
						<span className="font_3">
							By continuing. I agree to the terms of use & privacy
							policy
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
