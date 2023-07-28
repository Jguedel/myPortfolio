import NavBar from "../Components/NavBar";
import "./Style/Error_404.css";

const Error404 = () => {
  return (
    <div>
      <NavBar />
      <div className="errorPage">
        <div className="errorText">
          <h1>
            <i className="error404 fa-solid fa-triangle-exclamation" /> 404
            Error <i className="error404 fa-solid fa-triangle-exclamation" />
          </h1>
          <h4>This page does not exist</h4>
        </div>
      </div>
    </div>
  );
};

export default Error404;
