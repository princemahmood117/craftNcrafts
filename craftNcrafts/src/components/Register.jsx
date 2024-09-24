import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './ContextProvider/ContextProvider';


const Register = () => {


  const {createUser} = useContext(AuthContext);

  const [createdUser, setCreatedUser] = useState("");
  const [createdUserError, setCreatedUserError] = useState("");

      // show the top of the page after clicking on "Read more"
      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    const handleRegister = (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      // console.log(name,email,password);

      setCreatedUser("");
      setCreatedUserError("");

      createUser(email,password)
        .then(result => {
          setCreatedUser("user created successfully!");
            console.log(result.user);
        })

        .catch(error => {
          setCreatedUser('error creating user')
            console.log(error);

        })



// validation chacking


    }
    return (
        <div className="heromin-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold italic">Register <span className='text-sky-500'>Here!</span> </h1>
         
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required name='name'/>
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required name='email' />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required name='password'/>
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>


            </form>
            <p className='ml-4'>First time here? <Link to='/login' className='text-blue-600 font-bold'>Login here</Link> </p>
          </div>

         
        </div>

        {createdUser && (
            <p className="text-green-600 text-center  p-2"> {createdUser} </p>
          )}

          {createdUserError && (
            <p className="text-red-600 text-center p-2"> {createdUserError} </p>
          )}
      </div>
    );
};

export default Register;