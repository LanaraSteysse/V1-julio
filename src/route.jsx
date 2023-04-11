import { BrowserRouter, Route } from "react-router-dom"
import App from "./Page1"
import Page2 from "./Page2"


Route = () => {
    return(
        <BrowserRouter>
        <Route component={App} path="/" exact />
        <Route path="/Page2" component={Page2}  />
        </BrowserRouter>
    )
}

export default Route