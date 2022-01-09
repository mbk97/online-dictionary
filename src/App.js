import React,{useEffect} from 'react';
import Dictionary from './Components/Dictionary/Dictionary';
import Header from './Components/Header/Header';
import { connect } from 'react-redux';
import { fetchWordAction } from './Redux/Actions/action';
import {ErrorLoadingWrapper,
       ServerText

} from './appStyle'

function App({wordData,fetchWordAction}) {

  const wordResult = wordData.word;
  const loading = wordData.loading;
  const error = wordData.error

  console.log(wordResult)

  const {word,phonetic,phonetics,meanings,origin} = wordResult

  const defaultText = "hello" 


 useEffect(() =>{
   fetchWordAction(defaultText)
 },[])


  return (
    <div className="App">
          <div className="component-wrapper">
                 <Header />
          </div>
          <ErrorLoadingWrapper>

            {loading && <ServerText>please Wait...</ServerText>}
            {error && !loading && <ServerText>{error.message}</ServerText>}
          </ErrorLoadingWrapper>

          {!error && !loading &&

          <div className="component-wrapper">
                <Dictionary 
                word={word}
                phonetic={phonetic}
                phonetics={phonetics}
                meanings={meanings}
                origin={origin}
                />
          </div>
          }

        
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    wordData:state.fetchWordState
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    fetchWordAction: (defaultText)=> dispatch(fetchWordAction(defaultText))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)( App);
