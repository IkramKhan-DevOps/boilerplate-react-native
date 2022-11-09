import React, {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext, AuthProvider} from "./context/AuthContext";
import AppNav from "./navigation/AppNav";

const App = () => {

    return (
        <AuthProvider>
            <AppNav/>
        </AuthProvider>
    )
}

export default App;
