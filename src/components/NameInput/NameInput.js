import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";

const NameInput = () => {
  const { updateUser, user } = useUser();
  const [inputName, setInputName] = useState("");

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  // Use useEffect to update the user's name after a delay to avoid immediate updates
  useEffect(() => {
    // Set a timeout to update the name after 500 milliseconds
    const timeoutId = setTimeout(() => {
      // Update the user's name with the inputName value
      updateUser({ ...user, name: inputName });
    }, 500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [inputName, updateUser, user]);

  return (
    <input
      type="text"
      placeholder="Hello! What's your name?"
      value={inputName}
      onChange={handleNameChange}
    />
  );
};

export default NameInput;
