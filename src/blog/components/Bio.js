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
        <a
          href="https://linkedin.com/in/sixtus-innocent-6b3a17a2"
          className="blog-link"
          target="_blank"
        >
          Sixtus Innocent
        </a>{" "}
        is a Software Engineer who lives in Nigeria with over four years of
        experience in programming. He loves solving technical problems, writing,
        and reading.
        <br />
        <br />
        <a
          href="https://github.com/sixtusDev"
          target="_blank"
          className="blog-link"
        >
          Github
        </a>{" "}
        &bull;{" "}
        <a
          href="https://linkedin.com/in/sixtus-innocent-6b3a17a2"
          target="_blank"
          className="blog-link"
        >
          LinkedIn
        </a>{" "}
        &bull;{" "}
        <a
          href="https://www.instagram.com/sixtus.dev/"
          target="_blank"
          className="blog-link"
        >
          Instagram
        </a>{" "}
        &bull;{" "}
        <a
          href="https://twitter.com/sixtusDev"
          target="_blank"
          className="blog-link"
        >
          Twitter
        </a>
      </p>
    </div>
  );
}

export default Bio;
