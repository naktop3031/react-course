import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Loading from "./components/Loading";

const Popular = React.lazy(() => import("./components/Popular"));
const Battle = React.lazy(() => import("./components/Battle"));
const NavBar = React.lazy(() => import("./components/Navbar"));
const Welcome = React.lazy(() => import("./components/Welcome"));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.state.theme === "light") this.setState({theme: "dark"});
    else this.setState({theme: "light"});
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.state.theme}>
          <div className="container">
            <NavBar theme={this.state.theme} toggleTheme={this.toggleTheme} />
            <React.Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="popular" element={<Popular />} />
                <Route path="battle" element={<Battle />} />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
