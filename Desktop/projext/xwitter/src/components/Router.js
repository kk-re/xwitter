import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";


const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
        <Router>
            {isLoggedIn ? 
                (<Routes>
                    <Route path="/" element={<Home />} />
                </Routes>)
                :
                (<Routes>
                    <Route path="/" element={<Auth />} />
                </Routes>)}

        </Router>
    );
};

export default AppRouter;
