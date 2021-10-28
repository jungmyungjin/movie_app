
function Food({fav}){
	return <h1>I like {fav}</h1>
}

const foodILike
{
	
}

function App() {
  return (
    <div className="App">
		<h1>Hello!!</h1>
		{/* Food 컴포넌트에 정보를 넘긴다 */}
		<Food fav="samgyeobsal"/>
		<Food fav="pizza"/>
		<Food fav="beef"/>
		<Food fav="kimchi"/>
    </div>
  );
}

export default App;
