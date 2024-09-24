import { useContext, useState } from "react";
import {JackInTheBox } from "react-awesome-reveal";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "./ContextProvider/ContextProvider";


const Login = () => {

	const {signInUser} = useContext(AuthContext)
	const [error,setError] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();

		const email = e.target.email.value; 
		const password = e.target.password.value;


		signInUser(email,password)
		.then(result=>{
		  console.log(result.user);
		  console.log('login success');
		//   Navigate(location?.state ? location.state : '/')
		  }
		)
		.catch(() => {
		  setError("Login Error")
		})
	}
    return (
 
<JackInTheBox>
<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-800 m-auto mt-10">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block ">Email</label>
			<input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md  focus:dark:border-default-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block ">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" />
		</div>

		<div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
          </div>

		<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 "></div>
		<p className="px-3 text-sm ">Alternative Login</p>
		<div className="flex-1 h-px sm:w-16 "></div>
	</div>

	
	<div className="flex justify-center space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			
		</button>

	</div>

	</form>

	<p className=" text-center sm:px-6 text-xl ">Don't have an account?
        <Link to='/register' className="ml-2 text-blue-700 font-bold">Register</Link>
	
	</p>

	
	{
    error && <p className='text-red-500 text-center'>{error}</p>
  }
</div>
</JackInTheBox>
            

    );
};

export default Login;