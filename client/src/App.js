import logo from './logo.svg';
import "./styles/global.scss";
import {createContext, useEffect, useReducer, useState} from "react";
import {useLoadData} from "./services/dataService";
import TableComponent from "./components/tableComponent";
import TableBlockComponent from "./components/tableBlockComponent";


const App = () => {
    return (
        <>
            <TableBlockComponent />
        </>
    )
}

export default App;
