
const foodILike = [
	{
		id:1,
		name:"samgyeobsal",
		image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpostfiles15.naver.net%2F20151214_110%2Fstormyou1_14500990691383pimS_JPEG%2F%25A4%25B1%25A4%25A4%25A4%25B7%25A4%25B1%25A4%25A4%25A4%25B7.jpg%3Ftype%3Dw773&f=1&nofb=1"
	},
	{
		id:2,
		name:"pizza",
		image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.ezday.co.kr%2Fcache%2Fboard%2F2009%2F12%2F24%2F117aed6c219b12585f97c4f254cf3f1a.jpg&f=1&nofb=1"
	},
	{
		id:3,
		name:"beef",
		image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPKPbTn3c7mI%2Fmaxres2.jpg&f=1&nofb=1"
	},
	{
		id:4,
		name:"kimchi",
		image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkb80kimchi.cafe24.com%2Fweb%2Fproduct%2Fextra%2Fsmall%2F202012%2Fb70cc320e57d0490bc51fabf60940eeb.jpg&f=1&nofb=1"
	}
]

function Food({name, picture}){
	return <div>
		<h2>I line {name}</h2>
		<img src={picture} alt={name}/>
	</div>
}



function App() {
  return (
    <div className="App">
		{/* dish : 각각의 아이템 이며, 오브젝트이다. */}
		{foodILike.map(dish => 
			<Food keys={dish.id} name={dish.name} picture={dish.image}/>)
		}
    </div>
  );
}

export default App;
