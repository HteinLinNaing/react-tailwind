import * as React from "react";
import { Routes, Route, Link, json } from "react-router-dom";
import "./App.css";
import "./index.css";
import Detail from "./components/Detail";
import User from "./components/User";


const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    );
}

export default App;