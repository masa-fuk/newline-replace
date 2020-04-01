import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState([]);

  function onChange(e) {
    let result = e.target.value.replace(/\r?\n/g, " ");
    result = result.replace(/- /g, "");
    setText(result);
  }

  function onClickInput() {
    const inputText = document.getElementById("inputText");
    inputText.value = "";
    setText("");
  }

  function onClickOutput() {
    const outputText = document.getElementById("outputText");
    outputText.select();
  }

  return (
    <div className="App">
      <header>
        <h1>改行置換ツール</h1>
        <p>文章中に含まれた改行記号をスペースに変換します</p>
      </header>
      <div className="mainBox">
        <div>
          <label htmlFor="inputText">
            入力
            <br />
            <textarea id="inputText" onChange={onChange} />
            <br />
            <button type="button" onClick={onClickInput}>
              クリア
            </button>
          </label>
        </div>

        <div>
          <label htmlFor="outputText">
            出力
            <br />
            <textarea
              id="outputText"
              value={text}
              readOnly="readonly"
              onClick={onClickOutput}
            />
            <br />
            <button type="button" onClick={onClickOutput}>
              選択
            </button>
          </label>
        </div>
      </div>

      <footer>
        <small>&copy;2020 Okazaki</small>
      </footer>
    </div>
  );
}

export default App;
