import { useContext, useState, useEffect, useLayoutEffect, memo } from 'react';
import { StoreContext } from '../store';
import { actions } from '../store';

function Main() {
    const [state, dispatch] = useContext(StoreContext);

    const [jobs, setJobs] = useState([]);
    useLayoutEffect(() => {
        fetch('http://localhost:3000/todoJob')
            .then((res) => res.json())
            .then((jobs) => {
                setJobs(jobs);
                state.jobs = jobs;
            });
    }, [state]);

    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onChange={() => {
                    dispatch(actions.setToggleAll(state.toggleAll));
                }}
                checked={state.toggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {jobs
                    .filter((job) => {
                        if (state.filter === 'Active') return job.finished === false;
                        if (state.filter === 'Completed') return job.finished === true;
                        return job;
                    })
                    .map((job, index) => {
                        return (
                            <li
                                className={job.finished ? 'completed' : ''}
                                key={index}
                                onDoubleClick={(e) => {
                                    dispatch(actions.setEditing(e.target.parentElement.parentElement));
                                    dispatch(actions.setTodoEditInput(job.name));
                                }}
                            >
                                <div className="view">
                                    <input
                                        className="toggle"
                                        type="checkbox"
                                        checked={job.finished ? true : false}
                                        onChange={() => {
                                            dispatch(actions.setToggleJob({ id: job.id, finished: job.finished }));
                                        }}
                                    />
                                    <label>{job.name}</label>
                                    <button
                                        className="destroy"
                                        onClick={(e) => {
                                            dispatch(actions.deleteJob({ id: job.id, element: e.target.parentElement.parentElement }));
                                        }}
                                    ></button>
                                </div>
                                <input
                                    className="edit"
                                    value={state.todoEditInput}
                                    onChange={(e) => {
                                        dispatch(actions.setTodoEditInput(e.target.value));
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.keyCode === 13 && e.target.value.trim() !== '') {
                                            dispatch(actions.editJob({ name: e.target.value, finished: job.finished, id: job.id }));
                                            dispatch(actions.setTodoEditInput(''));
                                            dispatch(actions.removeEditing(e.target.parentElement));
                                        }
                                    }}
                                />
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
}

export default memo(Main);
