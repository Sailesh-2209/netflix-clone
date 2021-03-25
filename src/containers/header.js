import React from "react";
import { Header } from "../components";
import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={logo} alt="Netflix" />
        <Header.ButtonLink>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
