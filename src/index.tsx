import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import { Provider } from "unstated";

kintone.events.on("app.record.index.show", ev => {
  const root = kintone.app.getHeaderMenuSpaceElement();
  ReactDOM.render(<App />, root);
  return ev;
});

function App() {
  return (
    <Provider>
      <Container />
    </Provider>
  );
}
