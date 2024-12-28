
const parent = React.createElement(
  "div", { id: "parent" },
  React.createElement("div", { id: "child" },
    React.createElement("h1", {}, "I AM H1 TAG")
  )
)

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "ABC" },
//   "HELLO WORD FROM REACT!! ")

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)