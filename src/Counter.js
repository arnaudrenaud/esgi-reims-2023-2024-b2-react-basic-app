function Counter({ count, onClickMinus, onClickPlus, errorMessage }) {
  return (
    <div className="App">
      Compteur : {count}
      <div>
        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickPlus}>+</button>
        {errorMessage ? <div className="App-error">{errorMessage}</div> : null}
      </div>
    </div>
  );
}

export default Counter;
