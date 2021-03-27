import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";

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
      <Loading.ReleaseBody />
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
