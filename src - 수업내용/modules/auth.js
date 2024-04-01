import React from 'react';
import { createAction, handleActions } from 'redux-actions';

//액션 타입



//액션 함수


//state 초기화
const initialState ={
    login: {
        username: '',
        password: ''
    },
    register: {
        username: '',
        password: '',
        passwordConfirm: ''
    },
    mode: '',
    user: ''
}

export const auth = (state=initialState, actions) =>{
    switch(actions.type){
        case CHANGEMODE :
            return{
                ...state,
                mode: actions.mode
            }
        case CHANGEUSERNAME :
            let form;
            if (state.mode === 'register'){
                form = {
                ...state.register,
                username: actions.username
                }
            }
            return{
                ...state,
                username: actions.username
            }
            default:
                return state

    }
}



