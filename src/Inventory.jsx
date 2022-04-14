import "./Inventory.css";

const inventoryList = [
    { inStock: false, item: "Bananas"},
    { inStock: true, item: "Avocados"},
    { inStock: false, item: "Loaf of bread"},
];

function Inventory(){
    const rows = inventoryList.map(({inStock, item}, index) => (
        <tr key={index}>
            <td>{item}</td>
            <td>{inStock ? "Yes" : "No"}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>In Stock?</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default Inventory;