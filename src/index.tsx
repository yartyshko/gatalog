import { render } from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { BrowserRouter} from "react-router-dom";
import store from './store/store';


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , rootElement);
