import React from 'react';


//액션 타입
const SIGN_UP = "auth/SIGN_UP "
const LOGIN = "auth/LOGIN"


//액션 함수
export const sign_up = (newUser) => ({type:"SIGN_UP", newUser})



//state 초기화
const userData = [] //가입정보 담는 그릇

const initialState ={
  userData: userData,

}


export const auth = (state=initialState, action) =>{
  switch(action.type){
        case "SIGN_UP" : console.log("userData",userData)
            return {...state, userData:[...state.userData, action.newUser]}
           

        default :
            return{...state}
     
    }


}

//auth

