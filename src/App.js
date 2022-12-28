// const App = () => {
// console.log("render");
// const [count, setCount] = useState(0);
// let prevCount;
// useEffect(() => {
//   console.log("useEffect");
//   prevCount = count;
// }, [count]);

// example use callback
// const handleClick = useCallback(() => setCount(count + 1), [count]);
// return (
//   <div className="App">
//     <h1>
//       Now: {count}, before: {prevCount}
//     </h1>
//     <button onClick={() => setCount(count + 1)}>
//       useEffect and useState
//     </button>
//     <button onClick={handleClick}>useCallback</button>
//   </div>
// );
// };

// export default App;

//Use Context
// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext("light");

// export default function App() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <>
//       <ThemeContext.Provider value={theme}>
//         <Form />
//       </ThemeContext.Provider>
//       <Button
//         onClick={() => {
//           setTheme(theme === "dark" ? "light" : "dark");
//         }}
//       >
//         Toggle theme
//       </Button>
//     </>
//   );
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = "button -" + theme;
//   return (
//     <button className={className} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// Use memo

// import { useState } from "react";
// import TodoList from "./TodoList.js";
// import { createTodos } from "./utils.js";

// const todos = createTodos();

// export default function App() {
//   const [tab, setTab] = useState("all");
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <button onClick={() => setTab("all")}>All</button>
//       <button onClick={() => setTab("active")}>Active</button>
//       <button onClick={() => setTab("completed")}>Completed</button>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Dark mode
//       </label>
//       <hr />
//       <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
//     </>
//   );
// }

// --> UseRef
// import { useRef } from "react";

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times!");
//   }

//   return <button onClick={handleClick}>Click me!</button>;
// }

// --> UseImperativeHandle
// import { useRef } from "react";
// import MyInput from "./MyInput.js";

// export default function App() {
//   const ref = useRef(null);

//   function handleClick() {
//     ref.current.focus();
//   }

//   return (
//     <form>
//       <MyInput label="Enter your name:" ref={ref} />
//       <button type="button" onClick={handleClick}>
//         Edit
//       </button>
//     </form>
//   );
// }

// --> useLayoutEffect

import ButtonWithTooltip from "./ButtonWithTooltip.js";

export default function App() {
  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </div>
  );
}
