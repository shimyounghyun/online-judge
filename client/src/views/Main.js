import React from 'react';
import styled from 'styled-components';

export default class Main extends React.Component{
	state = {
		list : []
	}
	
	async componentDidMount(){
		try{
			const response = await fetch("https://54.180.94.208:4000/judge-all-list");
			const data = await response.json();
			console.log(data);
//			this.setState({
//				list	
//			});
		}catch(e){
			console.log(e);
		}
	}
	render(){
		const {list} = this.state;
		console.log(list);
		return (<div>Hi</div>);
//		return({list.map((name)=>{
//			return <div>{name}<div>;
//		})});	
	}
}
