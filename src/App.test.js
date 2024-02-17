import { render, screen } from "@testing-library/react";
import App from "./App";
import NavBar from "./Components/NavBar";

test("renders learn react link", () => {
  render(<App />);
  // expect(<NavBar />).toBeInTheDocument();
});
