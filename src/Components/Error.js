import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return(
        <div className="error-div">
            <h1>Oops...</h1>
            <span>Something got wrong..{err.status}</span>

        </div>
    )
}

export default Error;