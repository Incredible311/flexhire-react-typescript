import React, {useState, useCallback} from 'react';
import { Card, Input, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../assests/styles/login.css";

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const handleChange = useCallback((event) => {
        const {name, value} = event.currentTarget;
        if (name === 'email') {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }, [setEmail, setPassword])

    const handleLogin = useCallback(() => {
        if (email && password) {
            history.push("/")
        } else {
            toast.error("Fill out all input fields!");
        }
    }, [history, email, password])

    return (
        <div className="login-container">
            <Card className="login-card">
                <h3 className="login-title">Sign in to Flexhire</h3>
                <Input className="login-input" type="email" placeholder="Input your email..." value={email} name="email" onChange={handleChange} autoFocus/>
                <Input className="login-input" type="password" placeholder="Input your password..." value={password} name="password" onChange={handleChange} />
                <Button className="login-btn" onClick={() => handleLogin()}>Login</Button>
            </Card>
        </div>
    )
}