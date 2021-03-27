import React from "react";
import { useContent } from "../hooks";
import { FirebaseContext } from "../context/firebase";
export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);

  return <div>Hello browse world</div>;
}
