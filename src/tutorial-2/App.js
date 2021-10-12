import "./App.css";

function App() {
  let login = "";
  let password = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login.trim() && password) {
      console.log({ login, password });
      login = "";
      password = "";
      event.target.reset();
    } else {
      alert("Заполните одно из полей!");
    }
  };

  const onChangeInput = (event) => {
    if (event.target.name === "login") {
      login = event.target.value;
    }
    if (event.target.name === "password") {
      password = event.target.value;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        className="input"
        placeholder="Email"
        name="login"
        onChange={onChangeInput}
      />
      <input
        required
        type="password"
        className="input"
        placeholder="Пароль"
        name="password"
        onChange={onChangeInput}
      />
      <button className="button button--form" type="submit">
        Войти
      </button>
    </form>
  );
}

export default App;
