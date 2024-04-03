import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../libs/styles/common/Header';
import { connect } from 'react-redux';
// import { login } from '../modules/auth';
import Button from '../libs/styles/common/Button';

const MainPage = (props) => {
    
    const {loginState, userID} = props
    // console.log("메인에 넘어가나?",loginState)
    return (

        <div>
            <Header loginState={loginState} userID={userID} />
            <div style={{position:'absolute', left:"50%", top: "50px"}}>
            <h1>Main</h1>
            <Button to='/write'>포스팅하기</Button>

            {/* <div style={{display: "flex", flexDirection: "column"}}>
            <Link to="/register">회원가입</Link>
            <Link to="/login">로그인</Link>
            </div> */}
            </div>
        </div>

    );
};


export default connect(
(state)=>(
    {
        loginState: state.auth.loginState,
        // (state명: state.파일명.state명)
        userID: state.auth.userID

    }),
    {
        
    }

    


)(MainPage)