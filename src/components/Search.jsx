import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router'

function Search() {
    const[ input, setInput] = useState("")
    const navigate =useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    }


  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e)=> setInput(e.target.value)} type="text"  value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20 rem;
  
    div {
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #FF8400, #FF4B00);
        font-size: 1.5rem;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        color: white;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white
    }
`;
export default Search