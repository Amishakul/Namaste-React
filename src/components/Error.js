import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Opps!!!</h1>
            <h2 className="p-4 m-4 text-center font-bold">Something Went Wrong!!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;