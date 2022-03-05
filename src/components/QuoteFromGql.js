import { useQuery, gql } from '@apollo/client';
import Quote from "./Quote";

export const randomQuote = gql`
  query getQuote {
    randomQuote {      
      text
      author
    }
  }
`;

export default function QuoteFromGql() {
  const { data, loading, error, refetch } = useQuery(randomQuote);
  if (loading) {
    return "Quote i loading..";
  }
  if (error) {
    return 'Could not render quote, but "Silence is golden"';
  }

  const { text, author } = data.randomQuote;

  return (
    <>
      <Quote text={text} author={author} />
      <button onClick={() => refetch()}>Get another quote</button>
    </>
  );

}
