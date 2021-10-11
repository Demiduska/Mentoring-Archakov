import './App.css';
import Profile from "./components/Profile/Proflie";
import ProfileClass from "./components/Profile/ProfileClass";

function App() {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return (
      <>
        <Profile name="Вася Пупкин" registredAt={(new Date(2021, 5, 22)).toLocaleDateString('ru', options)}/>
        <ProfileClass name="Новый Вася Пупкин" registredAt={(new Date(2021, 4, 23)).toLocaleDateString('ru', options)}/>
      </>
  );
}

export default App;
