import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange12 = (event) => setToDo(event.target.value);
  const onSubmit12 = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To dos ({toDos.length})</h1>
      <form onSubmit={onSubmit12}>
        <input
          value={toDo}
          onChange={onChange12}
          type="text"
          placeholder="Write your to do"
        ></input>
        <button type="">Add to Do</button>
      </form>
      <hr />
      <ul>
        {/* React를 위해 각 li에 고유한 keys값을 셋팅해주어야 한다 */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
