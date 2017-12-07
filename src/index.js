import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

// Create the store and pass it the reducer we created
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store);

/* Pass store to App */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
