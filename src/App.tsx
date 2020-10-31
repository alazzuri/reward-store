//REACT
import React from "react";

//COMPONENTS
import RoutesContainer from "./containers/RoutesContainer/RoutesContainer";
import ProvidersContainer from "./containers/ProvidersContainer/ProvidersContainer";

//TAILWIND
import "./tailwind.output.css";

//CONTEXT

const App = () => (
  <div className="bg-gray-100 w-full">
    <ProvidersContainer>
      <RoutesContainer />
    </ProvidersContainer>
  </div>
);
export default App;
