import React from "react";


// '리액트 클래스 컴포넌트'클래스를 App이라는 객체로 가져온다
class App extends React.Component{
	// state는 오브젝트이다.
	// 변수를 state안에 넣는다.
	state = {
		count: 0
	}
	// javascript code
	add = () => {
		// this.state.count = 1;
		// this.setState({count: this.state.count + 1});
		this.setState(current => ({count: current.count + 1}));
	};
	minus = () => {
		// this.setState({count: this.state.count - 1});
		this.setState(current => ({count: current.count - 1}));
	};
	render(){
		// stat는 객체이기 때문에 'this'를 써줘야만 한다.
		return <div>
			<h1>The numver is: {this.state.count}</h1>
			<button onClick={this.add}>Add</button>
			<button  onClick={this.minus}> Minus</button>

		</div>
		}
}

export default App;
