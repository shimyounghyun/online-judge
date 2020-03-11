import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import List from '../components/List';
import Write from '../components/Write/Write'

export default class Main extends React.Component{
	state = {
		list : [],
		func_name : '',
		init : ''
	}
	
	async componentDidMount(){
		try{
			const response = await fetch("http://54.180.94.208:4000/judge-all-list");
			const data = await response.json();
			const {list} = data;
			this.setState({
				list	
			});
		}catch(e){
			console.log(e);
		}
	}

	handleListItemClick = async (func_name) => {
		if (this.state.func_name === func_name) return;
		try{
			const response = await fetch('http://54.180.94.208:4000/write/'+func_name);
			const data = await response.text();
			this.setState({
				init : data,
				func_name : func_name
			});
		}catch(e){
			console.log(e);
		}
	}

	render(){
		const {list, func_name, init} = this.state;
		const activeFunc = list.find((item)=>item === func_name)
		return (
			<>
				<Header/>
				<Wrapper>
					<List
						list={list}
						func_name={func_name}
						onListItemClick={this.handleListItemClick}
					/>
					{
						list.length !== 0 &&
						<Write func_name={activeFunc} init={init}/>
					}			
				</Wrapper>
			</>
		);
	}
}
const Search = styled.input`

`;
const Wrapper = styled.div`
	display: flex;
    flex-direction: row;
    height: calc(100vh - 50px);
`;