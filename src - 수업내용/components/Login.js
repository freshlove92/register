import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { change_mode } from '../modules/auth';

const Login = (props) => {

    const {mode, change_mode, form}=props

    return (
        <Form 
            form={form}
            mode={mode}
            change_mode={change_mode} />

    );
};

export default connect(
(state)=>({

    login: state.auth.login,
    mode: state.auth.mode
}),
{
change_mode,

})(Login);