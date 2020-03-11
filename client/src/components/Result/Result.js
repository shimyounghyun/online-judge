import React from 'react';
import styled from 'styled-components';

const Result = ({isOpen, close, result}) => {
    console.log(result);
    return (
        <>{
            isOpen ?
            <>
                <ModalOverlay/>
                <Modal>
                    <p className="title">
                        {result.error == 1 ? "컴파일 오류" : (result.success == result.total ? "정답!" : "오답")}
                    </p>
                    <div className="content">
                        {result.error == 0 ?
                            <p>채점 결과 {result.success}/{result.total}</p>
                            : <p>다시 확인해주세요</p>
                        }
                    </div>
                    <div className="button-wrap">
                        <button onClick={close}> 확인 </button>
                    </div>
                </Modal>
            </>
            : null
            }</>
      )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(249, 249, 249, 0.85);
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    & > * {
      &:first-child{
        margin-top: 16px;
      }
      margin-left: 16px;
      margin-right: 16px;
    }
    p.title{
      font-size: 16pt;
      font-weight: bold;
      color: #333;
    }
    .content{
      border-top: 1px solid #bebebe;
      margin-top: 16px;
      p{
        padding: 8px;
        font-size: 12pt;
        color: #999;
      }
    }

    .button-wrap{
      margin: 0;
      margin-top: 8px;
      button{
        width: 100%;
        padding: 12px 0;
        border-radius: 0 0 10px 10px;
        background-color: #ad7cef;
        font-size: 13pt;
        color: white;
        border: 0;
        cursor: pointer;
        &:hover{
          background-color: #7f49c8;
        }
        &:active{
          background-color: #7e49c8;
        }
      }
    }
`;

export default Result;