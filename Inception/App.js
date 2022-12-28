const heading1 = React.createElement("h1", {
    id:"title" // it stores tag attributes like id="title", style=""   we call it as PROPS
}, "Heading 1");  // creates h1 tag => NOW we need to put this heading into root 

const heading2 = React.createElement("h2", {
    id: "title"
}, "Heading 2")


console.log(heading1); // React element is an object 

const container = React.createElement("div" , {id: "container"} , [heading1, heading2]);

//creating root 
// we have to tell react that, this is the root element this is the place i want my react to run
// createRoot() tells react that, what is the root element inside my app

const root = ReactDOM.createRoot(document.getElementById("root")); // root is the place where react runs other HTML code won't affect

// passing a react element inside the root element
// render() takes react element and modifies our DOM (injects into the DOM note: see => inspect => elemets)
// render() will override everything eg. line no. 12 will override with line no. 33

root.render(container); 