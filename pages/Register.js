import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";

const Register = () => {
        const[firstName,setFirstName] = useState("");
        const[lastName,setLastName] = useState("");
        const[email,setEmail] = useState("");
        const[profilePicture, setProfilePicture] = useState("");
        const [birthDate, setBirthDate] = useState("");
        const[password,setPassword] = useState("");
        const[phoneNumber,setPhoneNumber] = useState("");
        const navigate = useNavigate();

        //form function
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const res = await axios.post("/api/v1/auth/register", 
                {name,
                email,
                password,
                phone,
                address,
                answer,
            });
                if(res && res.data.success){
                    toast.success(res.data.message);
                    navigate("/login");
                } else{
                    toast.error(res.data.message);
                }
            } catch(error){
                console.log(error)
                toast.error('Something went wrong');
            }
        };



    
    return (
        <Layout title="Register - Ecommerce App"> 
           <div className="form-container">
         <form onSubmit={handleSubmit}>
            <h4 className="title"> REGISTER NOW</h4>
            <div className="mb-3">
                
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName1"
                placeholder="Enter Your Name"
                required
                />
                
            </div>

            <div className="mb-3">
                
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email"
                required
                />
                
            </div>


            <div className="mb-3">
                
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
                />
            </div>

            <div className="mb-3">
                
                <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputPhone1"
                placeholder="Enter Your Phone"
                required
                />
            </div>

            <div className="mb-3">
            
                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress1"
                placeholder="Enter Your Address"
                required
                />
            </div>


            <div className="mb-3">
            
            <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputAnswer1"
            placeholder="What is your favorite sport?"
            required
            />
        </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
         </form>

           </div>
        </Layout>
    )
}

export default Register;



