import React from 'react';
import styled from 'styled-components';

class Header extends React.Component{    
    render(){
        return (
            <Wrapper>
                <Title>Libft 연습장</Title>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    height: 50px;
    padding: 0 30px;
    border-bottom: 1px solid #eee;
`;

const Title = styled.div`
        font-size : 16px;
        font-weight : 800;
`;

export default Header;