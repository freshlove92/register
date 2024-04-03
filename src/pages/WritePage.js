import React, { useState } from 'react';
import Write from '../components/write/Write';
import Responsive from '../libs/styles/common/Responsive';
import Tag from '../components/write/Tag';
import WriteActionBtn from '../components/write/WriteActionBtn';
import Button from '../libs/styles/common/Button';
import { connect } from 'react-redux';
import { tagcontent,posting } from '../modules/write';

const WritePage = (props) => {

    const {tagcontent, tagData,userID,posting,PostingData} = props

    const [title,setTitle] = useState()
    const [content, setContent] = useState()

    const handleTitle =(newTitle)=>{
        setTitle(newTitle)
    }

    const handleContent =(newContent)=>{
        setContent(newContent)
    }
    // console.log("content",content)
     console.log("PostingData 다 들어왔나?",PostingData)


    return (
        <Responsive>
            <h1>글 작성하기</h1>
            <Button to='/'>main</Button>
            <Write handleTitle={handleTitle} handleContent={handleContent}/>
            <Tag tagcontent={tagcontent} tagData={tagData}/> 
            <WriteActionBtn userID={userID} tagData={tagData} title={title} content={content} posting={posting}/>
        </Responsive>
    );
};

export default connect(
    (state)=>({
        tagData: state.write.tagData,
        userID: state.auth.userID,
        PostingData: state.write.PostingData
    }),{
        tagcontent,
        posting
    }
)(WritePage);