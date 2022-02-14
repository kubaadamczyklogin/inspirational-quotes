import "./styles.css";
import {gql, useQuery } from '@apollo/client';

export default function App() {
  return (
    <div className="App">
      <h1>Inspirujące cytaty</h1>
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
  const {data, loading} = useQuery(randomQuote);
  if(loading){
    return "Quote i loading..";
  }
  const {text, author } = data.randomQuote;

  return <Quote text={text} author={author} />
}

function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}