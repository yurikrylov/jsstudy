import { useState } from 'react'
import { useGetSynonyms } from './hooks/useGetSynonyms';
import './App.css'

function App() {
  const [word, setWord] = useState('');
  const { isLoading, getSynonyms, synonyms } = useGetSynonyms();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    getSynonyms(word)

  }
  const handleSynonymClick = (newWord) => {
    setWord(newWord)
    getSynonyms(newWord)
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='word-input' >Your word </label>
        <input
          id='word-input'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input><button>Submit</button>
      </form>
      {isLoading ? <div>Loading...</div> :
        synonyms.map((synonym, index) =>
          <p
            key={index}
            onClick={() => handleSynonymClick(synonym.word)}
          >{synonym.word}
          </p>
        )}
    </div>
  )
}

export default App
