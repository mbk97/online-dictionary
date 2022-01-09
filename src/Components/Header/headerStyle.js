import styled from "styled-components";

export const HeaderContainer = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-around;
 background-color:#97c5e8;
 height: 90px;
 width:100%;



 @media screen and (max-width:600px){
     /* justify-content:space-between; */
 }

`

export const Title = styled.p`
    text-transform:capitalize;
    font-family: 'EB Garamond', serif;
    font-weight:500;
    color:white;

    
  
 @media screen and (max-width:600px){
    font-size:12px;
 }

`

export const InputForm = styled.form`
display: flex;
align-items:center;
/* margin:0 16px; */


button{
  height:56px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  font-size:1.5rem;
  cursor:pointer;
  padding:9px 9px;




}

`

export const SearchInput = styled.input`

  height:34px;
  width:300px;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  outline:none;
  border-right:0;
  font-family: 'EB Garamond', serif;
  font-size:24px;
  padding:9px 9px;



  ::focus{
      outline:none
  }


  
 @media screen and (max-width:600px){
     width:170px;
 }



`

export const LogoContainer = styled.div`


img{
    height:50px;
    width:50px;
    border-radius:50%;
    /* margin-left:40px; */
}
`