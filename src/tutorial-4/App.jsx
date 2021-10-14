import "./App.css";
import { useState } from "react";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";

const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];

const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];

function App() {
  const [words, setWords] = useState([]);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generatePhrase = () => {
    let phrase =
      adjectivesArr[getRandomInt(0, adjectivesArr.length - 1)] +
      " " +
      adjectivesArr[getRandomInt(0, adjectivesArr.length - 1)] +
      " " +
      nounsArr[getRandomInt(0, nounsArr.length - 1)];
    setWords([...words, phrase]);
  };

  const resetList = () => {
    setWords([]);
  };

  return (
    <div className="wrapper">
      {!words.length ? (
        <EmptyBlock />
      ) : (
        <div className="list">
          {words.map((phrase, index) => (
            <Phrase key={index} phrase={phrase} />
          ))}
        </div>
      )}

      <button onClick={generatePhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={resetList} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
}

export default App;
