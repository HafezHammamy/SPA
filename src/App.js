import "./App.css";
import { Fragment } from "react";
import Header from "./components/layout/header";
import Main from "./components/layout/main";
import VirtualScroll from "react-dynamic-virtual-scroll";

function App() {
  return (
    <VirtualScroll
      className="List"
      minItemHeight={5}
      totalLength={200}
      renderItem={(rowIndex) => {
        return (
          <div className="List-item">
            <h3>List item: {rowIndex}</h3>
          </div>
        );
      }}
    />
  );
}

export default App;
