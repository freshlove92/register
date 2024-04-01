import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { change_mode } from '../modules/auth';

const Register = (props) => {

    const {mode, change_mode, form} = props;

    return (
        <Form mode={mode} change_mode={change_mode} form={form}/>
        
    );
};

export default connect(
(state)=>({
    form: state.auth.Register,
    mode: state.auth.mode
}),
{
change_mode,

})(Register);