import ListItem from './ListItem';

function Main() {
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
        </section>
    );
}

export default Main;
