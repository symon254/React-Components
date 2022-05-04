import "bootstrap/dist/css/bootstrap.min.css";
//import Navigation from "./Pages/pageComponents/Navigation";
import React from "react";
import Footers from "./Pages/pageComponents/Footers";
import Navigation from "./Pages/pageComponents/Navigation";
function App() {
    return (
        <div className="App">
            <Navigation />
            <Footers />
        </div>
    );
}

export default App;
