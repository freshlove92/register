import React, { useEffect, useState } from 'react';
import Button from '../libs/styles/common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../libs/styles/palette';

const FormDiv=styled.div`
    h3{
        margin: 0;
        color: ${palette.Violet[8]};
        margin-bottom: 1rem;
    }
`
const InputStyle = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.Violet[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    
    &:focus{
        color: ${palette.Gray[7]};
        border-bottom: 1px solid ${palette.Teal[7]};
    }

    &+&{
        margin-top: 1rem;
    }
`

const ButtonStyle = styled(Button)`
    margin-top: 1rem;
`
const FootDiv=styled.div`
    margin-top: 2rem;
    text-align: right;
    a{
        color: ${palette.Gray[6]};
        text-decoration: underline;

        &:hover{
            color: ${palette.Gray[9]};
        }
    }
`
const textType = {
    login: "로그인",
    register: "회원가입"
    }

const Form = (props) => {

    

    // const {type} = props

    // // const [type, setType] = useState("login")
    // const text = textType[type]
    // console.log("textType[type]?",textType[type])

    // console.log("text?",text)
    // console.log("type?",type)


    // const toggleType = () => {
    //     setType(type === 'login' ? 'register' : 'login');
    // };
    // console.log("셋타입",setType)

    // const [mode, setMode]=useState('login');


    const {mode, change_mode, form, change_username} = props;
    const text = textType[mode]
    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();

    // useEffect(()=>{
    //     setUsername(form.username)
    //     setPassword(form.password)
    // },[username,password])

    const onChangePassword =(e)=>{
        change_username(e.target.value)
        // console.log("onChangePassword",e.target.value)

    }

    const onChangePasswordCheck =(e)=>{
        // console.log("onChangePasswordCheck",e.target.value)
    }

    const onClick =(e)=>{
        if(e.target.innerHTML === '로그인'){
            change_mode('login')
        }else{
            change_mode('register')
        }
        // console.log(e.target.innerHTML)
    }

    return (
        <FormDiv>
            <h3>{text}</h3>
            <form>
                <InputStyle
                    value={form.username}
                    name="username" 
                    placeholder='아이디'
                    type='text'
                    autoComplete='username' />                        
                
                
                <InputStyle
                    value={form.password}
                    
                    onChange={onChangePassword}
                    type='password'
                    autoComplete='new-password'
                    name="password" 
                    placeholder='비밀번호' />
                
                
                {mode === 'register' && (
                <InputStyle
                    value={form.passwordConfirm}
                    onChange={onChangePasswordCheck}
                    autoComplete='new-password'
                    type='password'
                    name="passwordConfirm" 
                    placeholder='비밀번호 확인'/>
                )}
                
            </form>
            <br/>
            <Button Cyan fullWidth >{text}</Button>
            
            <br/>
            <br/>
            <FootDiv onClick={onClick}>
                 {mode === 'login' ? (
                        <Link to='/register'>회원가입</Link>
                    ) : (
                        <Link to='/login'>로그인</Link>
                    )}
            </FootDiv>

        </FormDiv>
    );
};

export default Form;