import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div>
      <div id="signup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input type="text" name="name" />
          </div>
          <div>
            Email: <input type="email" name="email" />
          </div>
          <div>
            Password: <input type="password" name="password" />
          </div>
          <div>
            Password confirmation:{" "}
            <input type="password" name="password_confirmation" />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}
