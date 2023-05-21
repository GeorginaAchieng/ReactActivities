import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Form from './Components/Todo';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoApp from './Components/TodoApp';
import  Navbar  from './Components/Navbar';
import Form from './Components/Todo';




function App() {
 
  return (
    <div className="App">
      <Navbar/>
                   
      <Form/> 
      <div className='content'>
      <TodoApp/>
      </div>
      <br></br>
      <div>
        <h2>To Do List App</h2>
      </div>
      <br></br>
      
    </div>

  );
}

export default App;
