import { useContext, useState, useEffect } from 'react';
import { actions } from '../store';
import { StoreContext } from '../store';

function Footer() {
    const [state, dispatch] = useContext(StoreContext);
    const [count, setCount] = useState(() => {
        let countFalse = 0;
        fetch('http://localhost:3000/todo')
            .then((res) => res.json())
            .then((jobs) => {
                jobs[0].todoJob.forEach((job) => {
                    if (job.finished === false) countFalse++;
                });

                setCount(countFalse);
            });
    });

    useEffect(() => {
        let countFalse = 0;
        if (Array.isArray(state.jobs))
            state.jobs.forEach((job) => {
                if (job.finished === false) countFalse++;
            });

        setCount(countFalse);
    }, [state]);

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{count}</strong> item left
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
