//REACT
import React from "react";

//COMPONENTS
import Header from "./components/Header";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//TAILWIND
import "./tailwind.output.css";
import Card from "./components/Card";

const App = () => (
  <div className="bg-gray-100">
    <Router>
      <Header />
      <Card
        name="Kodak 234"
        category="Cameras"
        requiredPoints={10000}
        onHandleClick={() => alert("lala")}
        imgSrc="https://picsum.photos/200"
      />
    </Router>
  </div>
);
export default App;
