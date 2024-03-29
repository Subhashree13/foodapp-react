import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
//create router configuration
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
// when createElement is rendered in DOM it converts the object(returned by createElement) into HTML
// const element = React.createElement("div",{className:"parent"}, [React.createElement("h1",{className:"child1"},"sibling1"), React.createElement("h1",{className:"child2"},"sibling2")]);
// console.log("element",element);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

//JSX syntactically extension of javascript used to create react elements, its a HTML like syntax under the hood when your program is executed
// it changes the JSX to React.createElement(), basically transpiled (by Babel) before it reaches the javascript engine

//const heading = <h1 className='parent'>React element using JSX</h1>;
//Functional container
//Component composition - composing two components into one another

// Food app
// Header - logo , navbar
// Body - search bar, restaurant container > restaurant cards
// Footer - copyrights, about, contact, return policy

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};
const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <MainContent /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//provide this router configuration to app to make the routing work
root.render(<RouterProvider router={appConfig} />);
