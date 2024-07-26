import ReactDOM from 'react-dom/client';
import App from "./App.js";

var rootElement = document.getElementById('root');
var rootReference = ReactDOM.createRoot(rootElement);

rootReference.render(<App/>);