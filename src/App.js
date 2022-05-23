import './App.css';
import TodoApp from './components/TodoApp';

export default function App({ Component }) {
  return (
    <div className="App">
    <span className='title'>Todo Application</span><br/>
    <TodoApp >

    </TodoApp>
    </div>
  );
}

