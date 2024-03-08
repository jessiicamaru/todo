import './App.css';
import { useContext } from 'react';
import { StoreContext } from './store';
import { Header, Footer, Main } from './component';

function App() {
    const [state, dispatch] = useContext(StoreContext);

    console.log(state);
    return (
        <section className="todoapp">
            <Header />
            <Main />
            <Footer />
        </section>
    );
}

export default App;
