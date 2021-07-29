import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "sixtusinno@gmail.com",
    size: 56,
  });

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={photoURL} alt="Me" />
      <p>
        <a href="https://twitter.com/james_k_nelson/">Sixtus Innocent</a> is a
        Software Engineer who lives in Nigeria with over four years of
        experience in programming. He loves solving technical problems, writing,
        and reading.
        <br />
        <br />
        <a href="https://facebook.github.io/create-react-app/">
          Github
        </a> &bull; <a href="https://mdxjs.com/">LinkedIn</a> &bull;{" "}
        <a href="https://frontarm.com/navi/">Instagram</a> &bull;{" "}
        <a href="https://frontarm.com/navi/">Twitter</a>
      </p>
    </div>
  );
}

export default Bio;
