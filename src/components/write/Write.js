import {  useState, useEffect, useRef} from 'react';
import Quill from 'quill';
import { useDispatch } from 'react-redux'
import 'quill/dist/quill.bubble.css'
import palette from '../../libs/styles/palette';
import Responsive from '../../libs/styles/common/Responsive';
import styled from 'styled-components';
import WriteActionBtn from './WriteActionBtn'
import {posting} from '../../modules/write'
import { connect } from 'react-redux';


const WriteDiv = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;

`

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${palette.Violet[4]};
    margin-bottom: 2rem;
    width: 100%;
    
    
`

const QuillDiv = styled.div`
    .q1-editor{
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;

    }
    .q1-eitor .q1-blank::before{
        left: 0px;
    }
`


const Write = (props) =>{

    const {handleTitle, handleContent} = props;

    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    
    useEffect(()=>{
        quillInstance.current = new Quill(quillElement.current,{
            theme: 'bubble',
            placeholder: '내용을 작성하세요',
            modules:{
                toolbar :[
                    [{header:'1'}, {header:'2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],

                ],

            },

        });
        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source)=>{
            if(source === 'user'){
                // console.log("이게뭐지?",quill.root.innerHTML) //내용박스
                // onchangeField({key: 'body', value:quill.root.innerHTML})
                handleContent(quill.root.innerHTML)
            }


        });
        

    },[])

    const mounted = useRef(false);
        
        useEffect(()=>{
            if(mounted.current) return;
            mounted.current = true;
            // quillInstance.current.root.innerHTML = body;

        },[])

    return (
        <WriteDiv>
            <TitleInput placeholder='제목을 입력하세요' onChange={(e)=> handleTitle(e.target.value)}/>
            <QuillDiv>
                <div ref={quillElement}/>
            </QuillDiv>
        </WriteDiv>
    );
};

export default Write;