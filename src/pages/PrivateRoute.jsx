import { Redirect, Route } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const PrivateRoute = (props) => {
    const { user, isLoading } = useUser();

    if (isLoading) {
        return 'Loading...';
    }

    if (user) {
        return <Route {...props} />;
    } else {
        return <Redirect to="/login" />;
    }
};
