import Home from "../Components/Home";
import Root from "../Root/Root";
import {createBrowserRouter} from "react-router"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path:"/",
                element: <Home />
            }
        ]
    }
]);
export default router;