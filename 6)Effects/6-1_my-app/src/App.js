import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((a123) => a123 + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // useEffect(실행할 컴포넌트 함수, [])
  // useEffect에서 동작하는 내용은 useState시 리랜더링 되지 않는다.
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");

    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back! React</h1>
      <Button text={"css practice"} />
      <br /> <br /> <br /> <br />
      <input
        onChange={onChange}
        type="text"
        name="Search hear...."
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
