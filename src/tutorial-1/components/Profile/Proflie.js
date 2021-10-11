import "./Profile.css";

function Profile(props) {
  const { name, registredAt } = props;

  return (
    <div className="profile">
      <h3>
        Привет, <strong>{name}!</strong>
      </h3>
      <span>Дата регистрации: {registredAt}</span>
    </div>
  );
}

export default Profile;