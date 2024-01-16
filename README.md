## React !

1.  Used Parcel as a bundler that helps in
    -dev build
    -local server
    -auto refreshes the page when new changes are made in any file - HMR(HOT MODULE REPLACEMENT)
    -uses file watching algorithm thats written in c++
    -faster build because of caching
    -optimised the images
    -minify
    -bundling
    -compress
    -consistent hashing
    -code spliting
    -differential bundling - support the web application in old browsers
    -gives proper error display view
    -can host your app in https
    -tree shaking - removes unsed code in the code base
    -different dev and production bundle

Import react using react and react dom cdn
React.createElement
ReactDOM.createRoot
root.render
JSX
Babel
node modules
package.json
package-lock.json
browsersList
script object in package.json
==========================

2.  React what? Why?
    Components - functional and Class
    Componentt Composition
    types of import and export - named and default
    ===============================

3.  Hooks
    useState

4.  useEffect
    fetch()
    Monolithic and MicroService Architecture

5.  Make search component
    useEffect with dependency array and without dependency array

6.  Routing in React using react-router-dom
    config route - use createBrowserRouter
    apply it to app - use <RouterProvier route={routeConfig}>
    Nested Routing to render children component with Header and Footer intact using children property in createBrowserRouter function and then use Outlet compoent
    Create Route path using Link component from react-router-dom
