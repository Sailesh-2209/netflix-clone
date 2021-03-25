import React, { useState } from "react";
import { FooterContainer } from "../containers/footer";
import { Header } from "../components";
import logo from "../logo.svg";
import { Form } from "../components";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";
  const handleSignin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src={logo} alt="Netflix" />
        </Header.Frame>
        {/* add children here */}
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin}>
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <FooterContainer />
    </>
  );
}
