import {Board} from './components/ui/DragDrop/Board';

import './_theme.scss';

function App() {



    return (
        <Board columns={[
            {id: 'todo', title: 'To Do'},
            {id: 'in-progress', title: 'In Progress'},
            {id: 'done', title: 'Done'}
        ]}/>
    )
}

export default App
