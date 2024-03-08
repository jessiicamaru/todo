function ListItem() {
    return (
        <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Taste JavaScript</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
        </li>
    );
}

export default ListItem;
