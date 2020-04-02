import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
import "./App.css";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes />
    </DndProvider>
  );
}

export default App;
