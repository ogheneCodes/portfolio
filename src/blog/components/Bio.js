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
        <a href="https://twitter.com/james_k_nelson/" className="blog-link">
          Sixtus Innocent
        </a>{" "}
        is a Software Engineer who lives in Nigeria with over four years of
        experience in programming. He loves solving technical problems, writing,
        and reading.
        <br />
        <br />
        <a
          href="https://facebook.github.io/create-react-app/"
          className="blog-link"
        >
          Github
        </a>{" "}
        &bull;{" "}
        <a href="https://mdxjs.com/" className="blog-link">
          LinkedIn
        </a>{" "}
        &bull;{" "}
        <a href="https://frontarm.com/navi/" className="blog-link">
          Instagram
        </a>{" "}
        &bull;{" "}
        <a href="https://frontarm.com/navi/" className="blog-link">
          Twitter
        </a>
      </p>
    </div>
  );
}

export default Bio;
