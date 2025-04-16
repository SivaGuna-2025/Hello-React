
import React from "react";
import ReactDOM from "react-dom/client";
   const heading=React.createElement("h1",{id:"heading"},"Hello World from React!");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    
    console.log(heading);
    const parent=React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am H1 ddddtag"),
        React.createElement("h2",{},"I am H2 tdfdsag")]),

        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")])]);
        root.render(parent);