import React from "react";
import { Route, Routes} from "react-router-dom";

import RegistrationForm from "../components/login/LoginForm";
import Trello from "../components/trello/Trello";

export const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<RegistrationForm />} />
      <Route path="/trello/" element={<Trello />} />
    </Routes>
  );
};
