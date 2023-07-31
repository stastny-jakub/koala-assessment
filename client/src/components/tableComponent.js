import TableRowComponent from "./tableRowComponent";

export let TableComponent = ({data, ref = null}) => {

    const generateTableHead = () => {
        if (data.length === 0 || !data[0]) return;
        let sample = data[0].data;
        let keys = Object.keys(sample).map(key => {
            return key;
        })
        return keys.map(key => (
            <th key={key}>{key}</th>
        ))
    }

    const getTableHeadLength = () => {
        if (data.length === 0) return;
        let sample = data[0].data;
        return Object.keys(sample).length + 2;
    }

    return (
        <table>
            <thead>
            <tr>
                <th></th>
                {generateTableHead()}
                <th></th>
            </tr>
            </thead>
            {data.length > 0 && data.map((item, key) => (
                <TableRowComponent key={key} row={item} tableHeadLength={getTableHeadLength()}/>
            ))}
        </table>
    )
}

export default TableComponent;
