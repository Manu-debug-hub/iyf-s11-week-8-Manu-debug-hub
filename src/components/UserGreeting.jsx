export default function UserGreeting({ user }) {
  return (
    <div className="user-greeting">
      {user ? (
        <h2>Welcome, {user.name}!</h2>
      ) : (
        <h2>Welcome, Guest!</h2>
      )}
    </div>
  );
}
