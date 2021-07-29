import React from "react";
import { Link } from "react-navi";
import ArticleMeta from "./ArticleMeta";
import styles from "./ArticleSummary.module.css";

function ArticleSummary({ blogRoot, route }) {
  return (
    <article className={styles.ArticleSummary}>
      <h2>
        <Link href={blogRoot + route.url.href} className="blog-link">
          {route.title}
        </Link>
      </h2>
      <ArticleMeta blogRoot={blogRoot} meta={route.data} />
      <p>{route.data.spoiler}</p>
    </article>
  );
}

export default ArticleSummary;
