import React, { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const ToastContext = () => {
    const [type, setType] = useState({});
    const types = [
        "Success",
        "Error",
        "Notification"
    ];

    return (
        <div>
            
        </div>
    )
}

export default ToastContext;