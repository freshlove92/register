import React from 'react';


//액션 타입
const SIGN_UP = "auth/SIGN_UP "
const LOGIN = "auth/LOGIN"
const LOGOUT = "auth/LOGOUT"


//액션 함수
export const sign_up = (newUser) => ({type:"SIGN_UP", newUser})
export const login = (loginState,userID) =>({type:"LOGIN", loginState, userID})
export const logout = (loginState) => ({type:"LOGOUT", loginState})



//state 초기화
const userData = [] //가입정보 담는 그릇

const initialState ={
  userData: userData,
  userID : '',
  loginState: false

}


export const auth = (state=initialState, action) =>{
  switch(action.type){
        case "SIGN_UP" :
            // console.log("넘어오니?",action.newUser )
            return {
                ...state,
                userData:[...state.userData, action.newUser]
            }
        case "LOGIN" :
            // console.log("넘어오니?",action.loginState)
            return {
                ...state,
                loginState: action.loginState,
                userID: action.userID
            }
        case "LOGOUT" :
            return{
                ...state,
                loginState: action.loginState
            }
           

        default :
            return{...state}
     
    }


}

//auth

