import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div style={{position:'absolute', left:"50%", top: "50px"}}>
            <h1>Main</h1>

            <div style={{display: "flex", flexDirection: "column"}}>
            <Link to="/register">회원가입</Link>
            <Link to="/login">로그인</Link>
            </div>
            
        </div>
    );
};

export default MainPage;