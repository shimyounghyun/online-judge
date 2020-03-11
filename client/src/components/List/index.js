import React from 'react';
import styled from 'styled-components';

class List extends React.Component{
    render(){
        const {
            list,
            onListItemClick,
            func_name
        } = this.props;
        return(
            <Wrapper>
            {list.map((v)=>{
                return (
                    <ListItem
                        onClick={()=>onListItemClick(v)}
                        active={v === func_name}
                        key={v}
                    >{v}
                    </ListItem>
                );
            })}
            </Wrapper>
        );
    }
}
const Wrapper = styled.div`
    min-width: 300px;
    width: 300px;
    height: calc(100% - 60px);
    overflow: scroll;
    border-right: 1px solid #eee;
`;

const ListItem = styled.div`
    cursor: pointer;
    padding : 15px 20px;
    font-size:24px;
    font-weight:${(props) => props.active ? 700 : 400};
    line-height: 1;
    background-color : ${(props) => props.active ? '#EEF3F8' : ''};
`;
export default List;