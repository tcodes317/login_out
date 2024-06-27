import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Login(){
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const handleSubmit=()=>{
        e.preventDefault();
        axios.post("http://localhost:4000/auth/login", values)
        .then(res => {
            conosole.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return(
        <>
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="bg-white p-3 rounded w-50">
                    <h2>Sign In</h2>
                    <form action="" onSubmit={handleSubmit} method="POST">
                        <div className="mb-3">
                            <label htmlFor="email"><strong>Email:</strong></label>
                            <input type="email" placeholder="Enter  Email" name="Email" autoComplete="off" onChange={e => setValues({...values, name: e.target.value})} className="block form-control rounded-0 block" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"><strong>Password:</strong></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={e => setValues({...values, name: e.target.value})} className="form-control rounded-0 block" />
                        </div>
                        <button type="submit" className="btn btn-success form-control">LogIn</button>
                        <div className="d-flex align-items-center">
                            <input type="checkbox" className="" />
                            <p className="position-relative mt-3 ml-2">You have agreed to the terms and conditions</p>
                        </div>
                        <button className="w-full bg-black text-white p-3">Create Account</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;