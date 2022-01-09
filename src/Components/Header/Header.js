import React,{useState} from 'react'
import { HeaderContainer, InputForm, LogoContainer, SearchInput, Title } from './headerStyle.js'
import {BiSearchAlt} from 'react-icons/bi'
import Logo from '../../images/image/logo.jpg'
import { useDispatch } from 'react-redux'
import { fetchWordAction } from '../../Redux/Actions/action.js'

const Header = () => {
    
    const dispatch = useDispatch()
    const [term,setTerm] = useState('')

    const formHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchWordAction(term))
        
    }






    return (
        <HeaderContainer>
            <Title>online dictionary</Title>

            <InputForm onSubmit={formHandler}>
                 <SearchInput type='text'
                  value={term} 
                  placeholder='Search your word...' 
                   onChange={(e) => setTerm(e.target.value)}
                  />
                    <button>
                        <BiSearchAlt />
                    </button>
            </InputForm>
            <LogoContainer>
                <img src={Logo} alt="" />
            </LogoContainer>
        </HeaderContainer>
    )
}

export default Header
