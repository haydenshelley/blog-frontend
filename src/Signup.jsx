export function Signup() {
  return (
    <div>
      <div id="signup">
        <h1>Signup</h1>
        <form method="post" action="http://localhost:3000/users.json">
          <div>
            Name: <input type="text" className="name" />
          </div>
          <div>
            Email: <input type="email" className="email" />
          </div>
          <div>
            Password: <input type="new-password" className="password" />
          </div>
          <div>
            Password confirmation:
            <input type="new-password" className="password_confirmation" />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}
