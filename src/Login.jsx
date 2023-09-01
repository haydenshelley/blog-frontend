import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input type="text" name="email" />
        </div>
        <div>
          Password: <input type="password" name="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
