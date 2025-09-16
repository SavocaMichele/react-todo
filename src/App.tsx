import {Board} from './components/Board/Board';

import './_theme.scss';
import {Header} from "./components/Header/Header";

function App() {

    return (
        <>
            <Header />

            <Board columns={[
                {id: 'todo', title: 'To Do'},
                {id: 'in-progress', title: 'In Progress'},
                {id: 'done', title: 'Done'}
            ]}/>
        </>
    )
}

export default App
