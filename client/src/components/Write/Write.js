import React from 'react';
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
        init : ''
    }

    handleChange = (content) => {
        this.setState({
            "content" : content
        })
    }

    handleSubmit = async (e) => {
        const {func_name, content} = this.state;
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
        .then(data => console.log(data));
    }
    render(){
        const {init, func_name} = this.props;
        this.setState({
            init :init,
            func_name : func_name
        })
        return(
            <Wrapper>
                {/* <textarea onChange={this.handleChange('content')}></textarea>
                <input type="text" onChange={this.handleChange('func_name')}/> */}

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
                <button onClick={this.handleSubmit}>전송</button>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    padding: 10px 10px 10px 10px;
    height: calc(100% - 60px);
`;

export default Write;