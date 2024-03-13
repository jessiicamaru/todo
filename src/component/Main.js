import { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../store';
import { actions } from '../store';

function Main() {
    const [state, dispatch] = useContext(StoreContext);

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/todoJob')
            .then((res) => res.json())
            .then((jobs) => {
                setJobs(jobs);
                state.jobs = jobs;
            });
    }, []);

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
                    .map((job) => {
                        return (
                            <li className={job.finished ? 'completed' : ''} key={job.id}>
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
                                    <button className="destroy"></button>
                                </div>
                                <input className="edit" value="Create a TodoMVC template" onChange={() => {}} />
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
}

export default Main;
