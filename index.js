import React from 'react';
import  ReactDOM  from 'react-dom/client';

const element = React.createElement("div",{className:"parent"}, [React.createElement("h1",{className:"child1"},"sibling1"), React.createElement("h1",{className:"child2"},"sibling2")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

