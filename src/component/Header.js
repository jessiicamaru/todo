import { useContext } from 'react';
import { StoreContext } from '../store';

import { actions } from '../store';

function Header() {
    const [state, dispatch] = useContext(StoreContext);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
            dispatch(actions.setJobs(e.target.value));
            dispatch(actions.setTodoInput(''));
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={state.todoInput}
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
                onKeyDown={handleKeyDown}
                autoFocus
            />
        </header>
    );
}

export default Header;
