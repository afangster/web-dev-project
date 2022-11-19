import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const validEmail = new RegExp(
        '^[a-zA-Z0-9_]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$'
     );

    const log_Acc = async (user, pass) => {
        await fetch('http://localhost:3030/login?user=' + user + '&pass=' + pass, {
            method: 'GET',
            // body: JSON.stringify({
            //     user: '',
            //     pass: ''
            // }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                username: user,
                password: pass
            },
        })
            .then((response) => console.log(response))
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validEmail.test(user)) {
            setEmailErr(true);
         }
        log_Acc(user, pass);
        console.log(user);
        console.log(pass);
    };

    return (
        <div className="login">
            <div className="login-container">
                <h1><center>Log in or Sign Up Here!</center></h1>
                <center>
                    <form onSubmit={handleSubmit}>
                        <label for="user" > Username or Email: </label><br />
                        <input type="text" className="form-control" value={user} onChange={(e) => setUser(e.target.value)} /><br />
                        <label for="pass" > Password: </label><br />
                        <input type="text" className="form-control" value={pass} onChange={(e) => setPass(e.target.value)} /><br />
                        <button type="submit">Log In</button>
                    </form>
                    {/* {emailErr && <p>Your email is invalid</p>} */}
					
					<Link to="/signup">
						Sign Up
        			</Link>
                </center>
            </div>
        </div>
    );
};


export default Login;
