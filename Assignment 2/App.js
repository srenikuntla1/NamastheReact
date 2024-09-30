/**
 * Created a Server
 * Hot Module Reload
 * File Watcher algorithm - c++ 
 * minify
 * bundling
 * cleaning our code
 * dev and production build
 * super fast build algorithm
 * image optimization
 * Caching while development
 * compression
 * Compatible with older version of browser
 * https on dev
 * port number
 * Consistent hashing algorithm
 * zero configuration
 * Tree shaking - removing unwanted code
 * 
 * TRANSITIVE DEPENDENCIES -> dependencies of dependencies
 * 
 * 
 * Polyfill - if browser doesn't understand the code, it will convert it to the code that browser understands
 * babel - convert the code to the code that browser understands
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    'h1', 
    {
        id:'title', 
        hello: 'world', 
        key:"h1"
    }, 
    'Heading 1 from parcel'
);

const data = "hi";


//React element
const Title = ()=>(<h1>
    Namaste React
    </h1>);

const heading1 = React.createElement('h2', {id:'title2', key:"h2"}, 'Heading 2');

// Functional component is a normal function
//JSX does sanity check
//component composition - using component inside another component
const HeaderComponent = ()=> {

    return (
       <div>
        {data}
        <Title/>
        <h1>Namaste React Functional Component</h1>
        <h2>This is a H2 tag</h2>
       </div>
    );

};


const root = ReactDOM.createRoot(document.getElementById("root"));  

root.render(<HeaderComponent/>);