import React from 'react';
import styled from 'styled-components';
import palette from '../../libs/styles/palette';

const TagDiv=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    border-top: 1px solid ${palette.Violet[2]};
    padding-top: 2rem;
    h4{
        color: ${palette.Violet[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`
const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 256px;
    border: 1px solid ${palette.Violet[9]};
        input,button{
            outline: none;
            border: none;
            font-size: 1rem;

        }
        input{
            padding: 0.5rem;
            flex: 1;
            min-width: 0;
        
        }
        button{
            cursor: pointer;
            padding-right: 1rem;
            padding-left: 1rem;
            border: none;
            background-color: ${palette.Violet[8]};
            color: white;
            font-weight: bold;

        &:hover{
            background: ${palette.Violet[6]};

        }
    }
`

const TagListUl = styled.ul`
    display: flex;
    margin-top: 0.5rem;

    li{
        list-style: none;
        margin: 0 auto;
    }

`

const Tag = ({tagcontent, tagData}) => {

    const tagSubmit =(e)=>{
        e.preventDefault();
        tagcontent(e.target.inputTag.value)
    }

    return (
        <TagDiv>
           <h4>태그</h4>
            <TagForm onSubmit={tagSubmit}>
                <input name='inputTag'/>
                <button type='submit' >추가</button>
            
            </TagForm>
            <br/>
            <TagListUl>
                {
                    tagData &&
                    tagData.map((item) => <li>{item}</li> )
                }
            </TagListUl>


        </TagDiv>
    );
};

export default Tag;