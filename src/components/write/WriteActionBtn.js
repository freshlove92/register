import React, { useState } from 'react';
import Button from '../../libs/styles/common/Button'
import styled from 'styled-components';

const ActionButtonDiv = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button+button{
        margin-left: 0.5rem;
    }
`
const StyleButton = styled(Button)`
    height: 2.125rem;
    &+&{
        margin-left: 0.5rem;

    }
`


const WriteActionBtn = (props) => {

    // console.log("왔니?",userID,tagData)

    const {userID,tagData,title,content,posting} = props

    const [Edit, setEdit] = useState(false);

    const onSubmit =()=>{
        posting(title, content, tagData, userID)
        alert ("포스팅 완료!")
    }
    
    


    return (
        <ActionButtonDiv>
            <StyleButton onClick={onSubmit}>
                포스트 {Edit ? "수정" : "등록"}

            </StyleButton>
            <StyleButton>취소</StyleButton>
        </ActionButtonDiv>
    );
};

export default WriteActionBtn;