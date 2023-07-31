import TableComponent from "./tableComponent";
import {createContext, useEffect, useReducer} from "react";
import {useLoadData} from "../services/dataService";

export const AppContext = createContext(null);

export const ACTIONS = {
    SET_INITIAL_DATA: "set_initial_data",
    REMOVE_ITEM: "remove_item"
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_INITIAL_DATA:
            return action.value;
        case ACTIONS.REMOVE_ITEM:
            deleteItemById(state, null, action.id)
            return [...state];
        default:
            return [...state];
    }
}

function deleteItemById(items, parent = null, id) {
    items.forEach((item, key) => {
        if (item.data.ID === id) {
            if (!parent) return items.splice(key, 1)
            return parent.children["has_nemesis"] ?
                parent.children["has_nemesis"].records.splice(key, 1) :
                parent.children["has_secrete"].records.splice(key, 1)
        }
        if (item.children["has_nemesis"]) deleteItemById(item.children["has_nemesis"].records, item, id);
        if (item.children["has_secrete"]) deleteItemById(item.children["has_secrete"].records, item, id);
    })
}

const initValues = [];
const TableBlockComponent = () => {

    const [state, dispatch] = useReducer(reducer, initValues)
    const data = useLoadData();

    useEffect(() => {
        if (!data.loading) dispatch({type: ACTIONS.SET_INITIAL_DATA, value: data.data});
    }, [data.loading]);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {data.loading ?
                <p>Loading...</p> :
                <TableComponent data={state}/>}
        </AppContext.Provider>
    )
}

export default TableBlockComponent
