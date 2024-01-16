import React from "react";
import { useUser } from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import "../AvatarCreator/AvatarCreator.css";

// AvatarCreator Component: Responsible for generating and displaying avatars.
const AvatarCreator = () => {
  const { user, updateUser } = useUser();
  const { generateRandomAvatar } = useFetch();
  const [avatar, setAvatar] = React.useState(null);

  // Function to create a new avatar and update the user context.
  const createAvatar = async () => {
    const newAvatar = await generateRandomAvatar();
    setAvatar(newAvatar);

    updateUser((prevUser) => ({
      ...prevUser,
      avatar: newAvatar,
      name: prevUser.name || "Default Name",
    }));
  };

  return (
    <div className="avatar-creator">
      <button className="button-creator" onClick={createAvatar}>
        Generate Avatar
      </button>
      {avatar && (
        <div className="avatar-container">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(avatar)}`}
            alt="Avatar"
            className="avatar-image"
          />
          <div className="avatar-text">{user.name && <h1>{user.name}</h1>}</div>
        </div>
      )}
    </div>
  );
};

export default AvatarCreator;
