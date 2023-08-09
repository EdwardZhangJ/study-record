import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContext, ThemeContext } from './05_useContext-use/context'

// import App from './App';
// import App from './01_no-use-hook/App'
// import App from './02_demo-counter-comparison/App'
// import App from './03_useState-use/App'
// import App from './04_useEffect-use/App'
import App from './05_useContext-use/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{name: 'whyt', level: 99}}>
    <ThemeContext.Provider value={{color: 'red', fontSize: 30 }}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);
