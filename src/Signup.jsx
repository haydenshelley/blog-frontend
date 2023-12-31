import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/posts"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  let validationMessage;

  if (name.length > 20) {
    validationMessage = <small id="failedValidation">name is too long</small>;
  } else if (name.length === 20) {
    validationMessage = (
      <small id="passedValidation">name is at max length</small>
    );
  } else if (name.length === 0) {
    validationMessage = "";
  } else if (name.length > 0 && name.length < 5) {
    validationMessage = <small id="failedValidation">name is too short</small>;
  } else {
    validationMessage = (
      <small id="passedValidation">
        {20 - name.length} characters remaining
      </small>
    );
  }

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <lable className="form-label">Name</lable>
          <input
            className="form-control"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {validationMessage}
        <div className="mb-3">
          <lable className="form-label">Email</lable>
          <input className="form-control" name="email" type="email" />
        </div>
        <div className="mb-3">
          <lable className="form-label">Password</lable>
          <input className="form-control" name="password" type="password" />
        </div>
        <div className="mb-3">
          <lable className="form-label">Password Confirmation: </lable>
          <input
            className="form-control"
            name="password_confirmation"
            type="password"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Signup
        </button>
      </form>
    </div>
  );
}
