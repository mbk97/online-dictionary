import styled from "styled-components";

export const DictionaryWrapper = styled.div`
 
 display:flex;
 align-items:center;
 justify-content:center;
 margin-top:5rem;
 flex-direction:column;

 .detail-text{
    

    
 }
    
`
export const DetailText = styled.div`


   p{
     font-size:2rem;
     font-weight:500;
   }

   .title{
    font-family: 'Pacifico', cursive;
   }

`


export const WordText = styled.h1`
      text-transform:capitalize;
      font-size:3rem;
      margin:0;
      display:flex;
      font-family: 'Pacifico', cursive;


`

export const ResultContainer = styled.div`
text-align:left;
width:700px;
height:auto;






.synonym-container p{
 text-transform:capitalize;
 font-size:2rem;
 font-family: 'Pacifico', cursive;


 
 
}

.synonym-list li{
    font-size:1.5rem;
    margin-left:20px;

 }



@media screen and (max-width:600px){
width:100vw;
margin-left:20px;


}


`