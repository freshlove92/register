import React, { useEffect, useState } from 'react';
import Button from '../libs/styles/common/Button';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../libs/styles/palette';
import { connect } from 'react-redux';
import { sign_up, login } from '../modules/auth';


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

//1. type으로 해서 페이지 전환하는걸로 되돌리고
    // ---------------------
    // 가입 안한 사람 -> 회원가입 (우선)
    // 가입을 한 사람은 -> 로그인
    //2. 아이디 패스워드를 저장 
    // 저장한 값이랑 기입한 값을 비교해서 로그인 처리 -> 메인페이지로 이동
    // 이후 로그인이 되면 (메인페이지에서)'밸류'님 환영합니다 나오게 하기

const textType = {
    login: "로그인",
    register: "회원가입"
    }

const Form = (props) => {

    const {sign_up,userData,login} = props
    const {type} = props
    const text = textType[type]
    // console.log("textType[type]?",textType[type])
    // console.log("text?",text)
    // console.log("type?",type)  
    // console.log(userData)
    
    const [error, setError] = useState()
    const navi = useNavigate()

     const onSubmit =(e)=>{
        e.preventDefault();
        if(type === 'register'){
            if(e.target.username.value === "" || e.target.password.value === ""){
                setError("아이디와 비밀번호를 전부 입력해 주세요!")
                return;
            }else if(e.target.password.value !== e.target.passwordConfirm.value){
                setError("확인 비밀번호가 틀렸습니다")
                return;
            }else{
                const newUser = {
                        username: e.target.username.value,
                        password: e.target.password.value
                    }
                sign_up(newUser)
                alert("가입 완료!")
                navi("/login")
                
            }

        }else{ // type=login
            const member = userData.find(item => item.username === e.target.username.value)
            // console.log(member) ->회원정보 / 오브젝트
            if(member){ //회원정보의 아이디와 기입한 아이디가 동일할 경우
                if(member.password === e.target.password.value){
                    alert("로그인 성공")
                    navi("/")
                    login(true,member.username)
                }else{  // 회원정보의 비밀번호와 기입한 비밀번호가 다를경우
                    setError("비밀번호가 틀렸습니다")
                }
            }else{
                setError("아이디가 틀렸습니다")
            }
            
            
        }
        }

    return (  
        <FormDiv>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <InputStyle type='text' name='username' placeholder="아이디"/>
                <InputStyle type='password' name='password' placeholder="패스워드"/>
                {type === 'register' && <InputStyle type='password' name='passwordConfirm' placeholder="패스워드확인"/>}
                <br/>
                <br/>
                {error && <div style={{color: 'red'}}>{error}</div>}
                <ButtonStyle Cyan fullWidth >{text}</ButtonStyle>
            </form>
            <br/>
            
            
            <br/>
            <br/>
            <FootDiv>
                 {type === 'login' ? (
                        <Link to='/register'>회원가입</Link>
                    ) : (
                        <Link to='/login'>로그인</Link>
                    )}
            </FootDiv>
        </FormDiv>
    );
};

export default connect(
    (state) =>(
        {
        userData: state.auth.userData
        }
    ),
    
    {
    sign_up, login
    }

)(Form);

// connect는 리듀스 파일과 연결해주는거
// 리듀스 사용할때 connect를 쓰려면
// 최하단에 파일명의 위치에 connect를쓰고 괄호를 두개 만든다
// 두번째 괄호안에 파일명을 우선 넣어버리고 시작해
// 앞의 괄호안에는 state와 함수를 넣는다 모양은 다른 파일 참고하기
// 맨 위로 올라가서 함수를 수입해 온다
// 중간으로 가서 props에서 불러와야 사용할 수 있어 ->함수랑 state 둘다 불러와야 해

