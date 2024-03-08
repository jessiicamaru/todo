import { useContext } from 'react';
import { actions } from '../store';
import { StoreContext } from '../store';

function Footer() {
    const [state, dispatch] = useContext(StoreContext);

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{state.jobs.length}</strong> item left
            </span>

            <ul className="filters">
                <li>
                    <a
                        className={state.filter === 'All' ? 'selected' : ''}
                        href="#/"
                        onClick={(e) => {
                            dispatch(actions.setFilter(e.target.textContent));
                        }}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        className={state.filter === 'Active' ? 'selected' : ''}
                        href="#/active"
                        onClick={(e) => {
                            dispatch(actions.setFilter(e.target.textContent));
                        }}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        className={state.filter === 'Completed' ? 'selected' : ''}
                        href="#/completed"
                        onClick={(e) => {
                            dispatch(actions.setFilter(e.target.textContent));
                        }}
                    >
                        Completed
                    </a>
                </li>
            </ul>

            <button
                className="clear-completed"
                onClick={() => {
                    dispatch(actions.setClearAll());
                }}
            >
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;
