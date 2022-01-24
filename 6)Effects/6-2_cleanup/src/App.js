import { useState, useEffect } from "react";

function Hello() {
  const destroyedFn = () => {
    console.log("Destroy... :(");
  };
  const effectFn = () => {
    console.log("Created :)");
    // Cleanup function
    // 소멸할때의 동작을 정의하고 싶을때 return을 사용한다.
    return destroyedFn;
  };
  useEffect(effectFn, []);

  // 여러 방법의 함수 사용 방법이 있다.
  //   useEffect(() => {
  //     console.log("Hi :)");
  //   }, []);

  //   useEffect(function () {
  //     console.log("Hi :)");
  //     return function () {
  //       console.log("bye.. :(");
  //     };
  //   }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick12 = () => setShowing((prev123) => !prev123);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick12}> {showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
