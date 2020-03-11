import React from 'react';
import Result from '../Result/Result';
import styled from 'styled-components';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/keymap/sublime';
import 'codemirror/mode/clike/clike';

class Write extends React.Component{

    state = {
        func_name : '',
        content : '',
        init : '',
        isModalOpen: false,
        result : {}
    }

    openModal = (data) => {
      this.setState({ isModalOpen: true, result : data });
    }
    
    closeModal = () => {
      this.setState({ isModalOpen: false }); 
    }

    handleChange = (content) => {
        this.setState({
            "content" : content
        })
    }

    handleSubmit = async (e) => {
        const {content} = this.state;
        const {func_name} = this.props;
        const post_obj = {
            "func_name" : func_name,
            "content" : content
        };
        await fetch('http://54.180.94.208:4000/'+func_name,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(post_obj)
        })
        .then(res => res.json())
        .then(data => {console.log(data); this.openModal(data)});
    }
    render(){
        const {init} = this.props;
        const {result} = this.state;
        return(
            <>
            <Wrapper>
                <CodeMirror
                    value={init}
                    options={{
                        mode: 'clike',
                        keyMap: 'sublime',
                        theme: 'solarized',                        
                        lineNumbers: true,
                      }}
                    onChange={(editor, data, value) => {
                        this.handleChange(value);
                    }}
                />
                <Button onClick={this.handleSubmit}>제출</Button>                
            </Wrapper>
            <Result isOpen={this.state.isModalOpen} close={this.closeModal} result={result}/>
            </>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    padding: 10px 10px 10px 10px;
    height: calc(100% - 60px);
`;

const Button = styled.button`
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    font-weight: bold;
    word-break: keep-all;
    color: white;
    cursor: pointer;
    border-radius: 1rem;
    border-style: none;
    outline: none;
    background: rgb(52, 58, 64);
    transition: all 0.125s ease-in 0s;
    margin-top:10px;
`;
export default Write;