const element = React.createElement("div",{class:"parent"}, [React.createElement("h1",{class:"child1"},"sibling1"), React.createElement("h1",{class:"child2"},"sibling2")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

