import { useRouteError } from "react-router-dom";
import "./index.styles.css";
interface ErrorResponse {
  data: any;
  status: number;
  statusText: string;
  message?: string;
}

const errorCheck = (error: any): error is ErrorResponse => {
  return "data" in error && "status" in error && "statusText" in error;
};

const ErrorPage = () => {
  const error: any = useRouteError();
  if (errorCheck(error)) {
    return (
      <div id="error-page">
        <h1>Oops! Page not found</h1>
        <p>Sorry the route you are looking for does not exist.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  } else {
    return <>General Error</>;
  }
};

export { ErrorPage };
