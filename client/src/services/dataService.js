import json from "../data/example-data.json";
import {useContext, useState} from "react";

export const useLoadData = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    setTimeout(() => {
        setLoading(false);
        setData(json)
    }, 2000)
    return {loading, data};
}
