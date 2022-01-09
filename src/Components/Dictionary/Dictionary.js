import React from 'react'
import { DictionaryWrapper, WordText, ResultContainer, DetailText } from './dictionaryStyle'


const Dictionary = ({word,phonetic,phonetics,meanings,origin}) => {

    const partOfSpeech = meanings[0].partOfSpeech
    const definitions = meanings[0].definitions[0]
    


    return (
        <DictionaryWrapper>
            
            <WordText> 
                <p className='title'>Word:</p> 
                <p> {word}</p>
             </WordText>
             
               <ResultContainer>
                        <DetailText>
                                <p className='title'>Phonetic:</p> 
                                <p>{phonetic}</p>
                         </DetailText>

                        <DetailText>
                            <p className='title'>Definition:</p> 
                            <p>{definitions.definition}</p>
                        </DetailText>

                        <DetailText>
                              <p className='title'>Origin:</p>
                              <p>{origin}</p>
                        </DetailText>

                        <DetailText>
                             <p className='title'>Part Of Speech:</p>
                             <p>{partOfSpeech}</p>
                        </DetailText>
                        {/* <p className='detail-text'><span>Definitions:</span> {definitions.definition}</p> */}

                        <DetailText>
                            <p className='title'>Example:</p> 
                            <p>{definitions.example} </p>
                            </DetailText>
                        <DetailText>
                             <p className='title'>Antonyms:</p>
                             <p> {definitions.antonyms}</p>
                        </DetailText>
                        
                   <div className='synonym-container'>
                       <p>synonyms</p> 
                       {definitions.synonyms.map((item)=>{
                           return (
                               <ul key={item} className='synonym-list'>
                                   <li>{item}</li>
                               </ul>
                           )
                       })}
                       </div> 
               </ResultContainer>

        </DictionaryWrapper>
    )
}

export default Dictionary
