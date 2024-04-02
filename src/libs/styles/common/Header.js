import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { connect } from 'react-redux';
import { logout } from '../../../modules/auth';


const HeaderDiv = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`

const WrapperDiv = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;

    }
    .right{
        display: flex;
        align-items: center;
    }
`
const UserDiv = styled.div`
    font-weight: 800;
    

`


const Header = ({loginState, userID, logout}) => {
    // console.log("헤더에 넘어오나?",loginState)

    
    return (
        <HeaderDiv>

            <WrapperDiv>
                <Button to='/' className='logo'>Main</Button>
                
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <div className='right'> 

                        {loginState === true ? 
                            (
                            <>
                            <UserDiv>{userID}님, 환영합니다　</UserDiv>
                            <Button onClick={()=>logout(false)}>로그아웃</Button>
                            </>):
                            (<>
                            <UserDiv>로그인 하세요　</UserDiv>
                            <Button><Link to="/login">로그인</Link></Button>
                            <Button><Link to="/register">회원가입</Link></Button>
                            </>
                            )

                        }
                            
                    </div>
        

                </div>

            </WrapperDiv>

        </HeaderDiv>
    );
};

export default connect(
    (state)=>({
        
    }),{
        logout
    }


)(Header);