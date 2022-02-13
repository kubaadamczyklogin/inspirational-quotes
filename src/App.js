import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Inspirujące cytaty</h1>
      <Quote text="To be or not to be..." author="Hamlet" />
    </div>
  );
}

function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}