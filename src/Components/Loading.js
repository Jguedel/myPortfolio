import NavBar from "./NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const LoadingPage = (props) => {
  return (
    <div className="loadingPage">
      <NavBar />
      <FontAwesomeIcon
        icon={faSpinner}
        style={{
          width: "30vw",
          height: "30vh",
          color: "green",
          marginTop: "5vh",
        }}
        spin
        className="spinner"
      />
    </div>
  );
};

export default LoadingPage;
