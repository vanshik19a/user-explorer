import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard.tsx";

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [country, setCountry] = useState("us");
  const [theme, setTheme] = useState("dark");

  // Fetch users based on selected country
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=9&nat=${country}`) // now 9 users for 3x3
      .then(res => res.json())
      .then(data => {
        const formattedUsers = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          role: "User",
          photo: user.picture.large
        }));
        setUsers(formattedUsers);
      });
  }, [country]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "1rem"
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem"
        }}
      >
        <h1>User Explorer</h1>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Country selector */}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{
          padding: "0.5rem",
          borderRadius: "5px",
          marginBottom: "1.5rem",
          backgroundColor: theme === "dark" ? "#1e293b" : "#fff",
          color: theme === "dark" ? "#fff" : "#000", // ✅ visible text
          border: "1px solid #ccc"
        }}
      >
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="gb">United Kingdom</option>
        <option value="au">Australia</option>
        <option value="in">India</option>
      </select>

      {/* User Grid - Fixed to 3 columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // ✅ Always 3 columns
          gap: "1rem"
        }}
      >
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            role={user.role}
            photo={user.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
