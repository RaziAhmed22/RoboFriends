import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('http://localhost:3000/doctors')
		.then(response=> response.json())
		.then(user=>{
			this.setState({robots:user})
		})

	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});
	}
	render(){
		const filteredRobot= this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.robots.length===0){
			return<h1>Loading</h1>
		}
		else{
			return(
				<div className='tc'>
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
				 	<Scroll>
				 	<Cardlist robots={filteredRobot}/>
				 	</Scroll>
			 	</div>
			);
		}
	}
}
export default App;