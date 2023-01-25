import React,{useState} from 'react';
import "./Login.css";
import { useHistory } from "react-router-dom";
import {sample} from '../images/sample.jpg';


const Login= props=>
{
    const mockLogin = {email:"",password:""};
    const [details, setDetails] = useState({email:"",password:""});
    const [sineup, setSignup] = useState({name:"",email:"",newPassword:"",mobileNumber:""});
    const [message, setMessage] = useState("");
    const [image, setImage] = useState({file:undefined});
    const [error, setError] = useState(false);

    const history = useHistory();
    const handleSignIn=(e)=>
    {
        e.preventDefault();
        if(mockLogin?.email === details.email || mockLogin?.password === details.password)
        {
            alert("succes");
            history.push("/TapNews");
            props.onlogin(1);
        }
        else{setError(true);}
    };

    const handleSignInClick=()=>
    {
        console.log('clicked');
    }
    const handleSignUp=(e)=>
    {
        setMessage("");
        e.preventDefault();
        if(sineup.name.trim() !=""&& sineup.newPassword.trim().length >=8 && sineup.email.trim() !="" && sineup.mobileNumber.trim().length ==10 )
        {
            alert("succes");
        }
        else{
            let count = 0;
            if(sineup.name.trim() ==="")
            {
                setMessage("Name cannot be empty");
                count = count +1;
            }
            if(sineup.newPassword.trim().length <8)
            {
                setMessage("Password must be atleast 8 characters");
                count = count +1;
            }
            if(sineup.email.trim() === "")
            {
                setMessage("E-Mail ID cannot be empty");
                count = count+1;
            }
            if(sineup.mobileNumber.trim().length !==10)
            {
                setMessage("Mobile Number should be of 10 digits");
                count = count+1;
            }
            if(count>1)
            {
                setMessage("Please fill all the feilds correctly")
            }
            setError(true);}
    };
    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });
const handleSignupClick=(e)=>
{
    if(container?.classList != null){container?.classList.add("right-panel-active");}
    e.preventDefault();
    setError(false);
}
// const handleChange=(e)=>
// {
//     container.classList?.remove("right-panel-active");
//     e.preventDefault();
//     setError(false);
   
//     // setImage(URL.createObjectURL(e.target.files[0]));
// }
// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });

    return(
        <div className="wrapper">
            <h2>News InShorts</h2>
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={handleSignUp}>
			<h1>Create Account</h1>
            {error &&
            <label className="invalid-credentails">{message}</label>
}
			{/* <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span> */}
			<input type="text" placeholder="Name" onChange={e=>{setError(false);setSignup({...sineup,name:e.target.value})}} value={sineup.name} />
			<input type="email" placeholder="Email" onChange={e=>{setError(false);setSignup({...sineup,email:e.target.value})}} value={sineup.email}/>
			<input type="password" placeholder=" New Password"  onChange={e=>{setError(false); setSignup({...sineup,newPassword:e.target.value})}} value={sineup.newPassword}/>
            <input type="text" placeholder="Mobile Number" onChange={e=>{setError(false);setSignup({...sineup,mobileNumber:e.target.value})}} value={sineup.mobileNumber} />
			<button type="submit">Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={handleSignIn}>
			<h1>Sign in</h1>
			{/* <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span> */}
            {error &&
            <label className="invalid-credentails">Invalid Credentails</label>
}
			<input type="email" placeholder="Email" onChange={e=>{setError(false); setDetails({...details,email:e.target.value})}} value={details.email} />
			<input type="password" placeholder="Password" onChange={e=>{setError(false); setDetails({...details,password:e.target.value})}} value={details.password} />
			<a href="#">Forgot your password?</a>
			<button type="submit" >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={handleSignupClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
</footer>
        </div>

    )
};

export default Login;