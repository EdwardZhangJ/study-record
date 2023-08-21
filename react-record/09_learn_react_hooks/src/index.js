import React from 'react';
import ReactDOM from 'react-dom/client';
// import { UserContext, ThemeContext } from './05_useContext-use/context'
import { UserContext, TokenContext } from './12_custom-Hooks/context'
import { Provider } from 'react-redux'
import store from './13_redux-hooks/store'

// import App from './App';
// import App from './01_no-use-hook/App'
// import App from './02_demo-counter-comparison/App'
// import App from './03_useState-use/App'
// import App from './04_useEffect-use/App'
// import App from './05_useContext-use/App'
// import App from './06_useReducer-use/App'
// import App from './07_useCallback-useMemo/App'
// import App from './08_useMemo-use/App'
// import App from './09_useRef-use/App'
// import App from './10_useImperativeHandle-use/App'
// import App from './11_useLayoutEffect-use/App'
// import App from './12_custom-Hooks/App'
// import App from './13_redux-hooks/App'
import App from './14_useId-use/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{name: 'why', level: 99}}>
    <TokenContext.Provider value={ 'coderwhy' }>
      <Provider store={store}>
        <App />
      </Provider>
    </TokenContext.Provider>
  </UserContext.Provider>

  // <UserContext.Provider value={{name: 'why', level: 99}}>
  //   <ThemeContext.Provider value={{color: 'red', fontSize: 30 }}>
  //     <App />
  //   </ThemeContext.Provider>
  // </UserContext.Provider>
  // </React.StrictMode>
);
