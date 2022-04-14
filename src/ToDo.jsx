import "./ToDo.css";

const todos = [
    "Finish the Lists & Tables module",
    "Eat lunch",
    "Go to the gym",
    "Complete the Styling module",
];

function ToDo() {
    const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>);
    return <ul>{listItems}</ul>;
}

export default ToDo;