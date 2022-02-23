import "./styles.css";
import {gql, useQuery } from '@apollo/client';

export default function App() {
  return (
    <div className="App">
      <h1>Random inspirational quote</h1>
      <h2>For my beloved wife Iwona A.</h2>
      <QuoteFromGql />    
    </div>
  );
}

const randomQuote = gql`
  query getQuote {
    randomQuote {      
      text
      author
    }
  }
`;

function QuoteFromGql() {
  const {data, loading, error, refetch} = useQuery(randomQuote);
  if(loading){
    return "Quote i loading..";
  }
  if(error){
    return 'Could not render quote, but "Silence is golden"';
  }

  const {text, author } = data.randomQuote;

  return (
    <>
      <Quote text={text} author={author} />
      <button onClick={()=>refetch()}>Get another quote</button>
    </>
  )
  
}

function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}