import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import TaskForm from "../../components/TaskForm";
import { Link } from "react-router-dom";

export default function Taks() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Nav className="flex justify-evenly">
                <button className="mt-5" type="submit">
                    <Link to={'list'}>Lista</Link>
                </button>
                <button className="mt-5" onClick={toggleVisibility}>
                    {visible ? "Ocultar" : "Agregar"}
                </button>
            </Nav>
            {visible &&
                <div>
                    <TaskForm />
                </div>}
        </>
    );
};



/* const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Nav className="flex justify-evenly">
                <button className="mt-5" type="submit">
                    <Link to={'list'}>Lista</Link>
                </button>
                <button className="mt-5" onClick={toggleVisibility}>
                    {visible ? "Ocultar" : "Agregar"}
                </button>
            </Nav>
            {visible && 
                <div><TaskForm />
            </div>}         
        </>
    ); */

