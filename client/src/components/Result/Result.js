import React from 'react';
import styled from 'styled-components';

const Result = ({isOpen, close, result}) => {
    let MSG = "";
    if (result.error == 1){
        MSG = "컴파일 오류";
    }else if (result.error == 134){
        MSG = "Abort 에러";
    }else if (result.error == 138){
        MSG = "버스 에러";
    }else if (result.error == 139){
        MSG = "세그먼테이션 오류";
    }else if (result.error == 142){
        MSG = "시간 초과";
    }else if (result.error == 0 && result.success == result.total){
        MSG = "정답";
    }else{
        MSG = "오답";
    }
    return (
        <>{
            isOpen ?
            <>
                <ModalOverlay/>
                <Modal>
                    <p className="title">
                        {MSG}
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