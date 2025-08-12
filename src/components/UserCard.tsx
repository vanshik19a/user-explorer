import React from "react";
import { Card } from "./ui/card.tsx"; // fixed path

interface UserCardProps {
  name: string;
  email: string;
  role: string;
  photo?: string; // optional
}

const UserCard: React.FC<UserCardProps> = ({ name, email, role, photo }) => {
  return (
    <Card>
      {photo && (
        <img
          src={photo}
          alt={name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "0.5rem"
          }}
        />
      )}
      <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "bold" }}>
        {name}
      </h2>
      <p style={{ margin: "0.25rem 0", color: "#555" }}>{email}</p>
      <p style={{ margin: "0.25rem 0", color: "#777" }}>{role}</p>
    </Card>
  );
};

export default UserCard;
