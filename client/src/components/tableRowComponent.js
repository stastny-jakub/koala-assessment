import {useContext, useLayoutEffect, useRef, useState} from "react";
import TableComponent from "./tableComponent";
import {AppContext} from "./tableBlockComponent";
import {ACTIONS} from "./tableBlockComponent";

const TableRowComponent = ({row, tableHeadLength}) => {
    const [data, dispatch] = useContext(AppContext)
    const childTableRef = useRef(null);
    const [child, setChild] = useState([]);
    const [isOpened, setIsOpened] = useState(false)

    const handleClick = () => {
        if (!childTableRef.current) return;
        childTableRef.current.style.height = isOpened ? "0" : "auto"
        setIsOpened(!isOpened)
    }

    const handleDelete = (id) => {
        dispatch({type: ACTIONS.REMOVE_ITEM, id: id})
    }

    useLayoutEffect(() => {
        if (row.children["has_nemesis"] && row.children["has_nemesis"].records.length > 0) {
            setChild(row.children["has_nemesis"].records);
        }
        if (row.children["has_secrete"] && row.children["has_secrete"].records.length > 0) {
            setChild(row.children["has_secrete"].records);
        }
    }, [row]);

    return (
        <tbody>
        <tr>
            {child.length ? (<td onClick={handleClick} style={{fontWeight: "bold"}}>V</td>) : (<td></td>)}
            {Object.keys(row.data).map(property => (
                <td key={property}>{row.data[property]}</td>
            ))}
            <td onClick={() => {
                handleDelete(row.data.ID)
            }} style={{color: "red"}}>X
            </td>
        </tr>
        {child.length > 0 && (
            <tr>
                <td colSpan={tableHeadLength}>
                    <div ref={childTableRef} data-open="false" className="child-table">
                        <TableComponent data={child}/>
                    </div>
                </td>
            </tr>
        )}
        </tbody>
    )
}

export default TableRowComponent
