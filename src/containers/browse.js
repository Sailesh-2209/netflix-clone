import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const user = firebase.auth().currentUser || {};

  console.log(firebase.auth().currentUser);

  useEffect(() => {
    console.log("profile ", profile);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : (
      <>
        <Loading.ReleaseBody />
        <Header src="joker1">
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthure wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attemp to feel like he's part of the
              world around him.
            </Header.Text>
          </Header.Feature>
        </Header>
      </>
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
