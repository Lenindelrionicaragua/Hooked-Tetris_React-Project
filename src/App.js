import React from "react";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <UserProvider>
      <div>
        <AppRoutes />
      </div>
    </UserProvider>
  );
};

export default App;
