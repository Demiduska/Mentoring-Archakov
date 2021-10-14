function Phrase({ phrase = "Какой-то текст" }) {
  return (
    <div className="block">
      <h3>{phrase}</h3>
    </div>
  );
}

export default Phrase;
