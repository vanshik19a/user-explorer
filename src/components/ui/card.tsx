import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "1rem"
      }}
    >
      {children}
    </div>
  );
};
