import React, { createContext, useState } from 'react';
import { UserProvider } from './components/UserProvider/UserProvider';
import UserComponent from './components/UserComponent/UserComponent';
import Todo from './components/Todo/TodoList/Todo';
import ThemeProvider from './components/Theme/ThemeProvider/ThemeProvider';
import Theme from './components/Theme/ThemeIn/Theme';
import TodoProvider from './components/Todo/TodoProvider/TodoProvider';

const App = () => {


  const [page, setPage] = useState('Provider')



  const ChangePage = () => {
    switch (page) {
      case 'Provider':
        return <UserProvider>
          <UserComponent />
        </UserProvider>
      case 'Todo':
        return <TodoProvider>
          <Todo />
        </TodoProvider>
      case 'Theme':
        return <ThemeProvider>
          <Theme />
        </ThemeProvider>
    }
  }
  return (
    <div className='App'>
      <div className="container">
        <div className="App-header">
          <h3>UseContext,useMemo</h3>
        </div>
        <div className="App-block">
          <ul>
            <li onClick={() => setPage('Provider')}>Provider</li>
            <li onClick={() => setPage('Todo')}>Todo</li>
            <li onClick={() => setPage('Theme')}>Theme</li>
          </ul>
        </div>
        <div className='page-content'>{ChangePage()}</div>
      </div>
    </div>

  );
};

export default App;
