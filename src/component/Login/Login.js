// import React , {useState} from 'react';
// import './login.css'; 
// import {Link , useNavigate} from 'react-router-dom';
// import auth from '../../firebase.js';

// const Login = () => {
//   const navigate = useNavigate();
//   const [values , setvalues] = useState({
//     email: '',
//     password: ''
//   });
//   const [errorMsg , setErrorMsg] = useState("");
//   const [submitButttonDisabled , setSubmitButttonDisabled] = useState(false);

//   const login = async ({ email, password }) => {
//     const responseLogin = await auth.signInWithEmailAndPassword(email, password);
//     return responseLogin.user;
//     // return 'hhhhhhh';
// }


//   const handleSubmit = ()=> {
//     if(!values.email || !values.password){
//       setErrorMsg("Fill All Fields");
//       return;
//     }

//     setSubmitButttonDisabled(true);
//     login( auth , values.email , values.password).then(async (res) => {
//       setSubmitButttonDisabled(false);
//       navigate('/home')
//     })
//   }


//   return (
//     <>
//       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
//               <div className="mt-2">
//                 <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
//                 <div className="text-sm">
//                   <Link to='/forgot' clLinkssName="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//               </div>
//             </div>

//             <div>
//               <button type="submit" onClick = {handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
//             </div>
//           </form>
          
//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?
//             <Link to='/' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login;
