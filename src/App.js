import './style/App.css';
import { Header, Footer, Main } from './component';
import { useContext } from 'react';
import { StoreContext } from './store';
import { putData } from './store/fetchData';

function App() {
    const [state, dispatch] = useContext(StoreContext);
    window.addEventListener('beforeunload', function (event) {
        const jobs = state.jobs;

        const data = {
            todoJob: [...jobs],
            id: 240705,
        };

        putData('240705', data);

        event.preventDefault();
        event.returnValue = '';
    });

    return (
        <section className="todoapp">
            <Header />
            <Main />
            <Footer />
        </section>
    );
}

export default App;
