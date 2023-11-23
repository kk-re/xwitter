import { authService } from "fbase";
import { useState } from "react";
// eslint-disable-next-line
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (event) => {
        const {
            target: { name, value },
        }= event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        } 
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // create New account
                data = await authService().createUserWithEmailAndPassword(email, password);
            } else {
                // log in
                data = await authService().signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        }   catch (Error) {
            console.log(Error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    autoComplete="on"
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    autoComplete="off"
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;
