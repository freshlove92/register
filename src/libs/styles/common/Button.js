import React from 'react';
import styled, {css} from 'styled-components';
import palette from '../palette';
import { Link } from 'react-router-dom';

// `${동적인거}`

const SBtn = css `
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${palette.Violet[5]};


    &:hover {
        background: ${palette.Violet[3]};
    }

    ${props => 
        props.fullWidth &&
        css `
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100px;
            font-size: 1.125rem   
        `
    } 

    ${props =>
        props.Cyan &&
        css `
            background: ${palette.Gray[8]};
            &:hover{
                background: ${palette.Gray[6]};
            }
        `
    }
    &:disabled{
        background: ${palette.Cyan[3]};
        color: ${palette.Cyan[5]};
        cursor: not-allowed;
    }

`

const StyledBtn = styled.button`
    ${SBtn}
`
const StyledLink = styled(Link)`
    ${SBtn}
    text-decoration: none;
`

const Button = (props) => {

    return (
        props.to?(<StyledLink {...props} Cayn={props.Cyan ? 1:0}/>) : 
                 (<StyledBtn {...props} />)
        
    );
};

export default Button;