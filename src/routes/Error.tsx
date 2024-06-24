import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl">Error 404. Page Not Found.</h1>
      <Link to="/" className="border-2 border-black p-2 rounded-3xl">
        Go back to demos
      </Link>
    </div>
  );
};

export default ErrorPage;
