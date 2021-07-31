import React from "react";
import { Link } from "react-navi";
import ArticleMeta from "./ArticleMeta";
import styles from "./ArticleSummary.module.css";

function ArticleSummary({ blogRoot, route, tagPage }) {
  return (
    <article className={styles.ArticleSummary}>
      <h2>
        <Link
          href={
            tagPage
              ? blogRoot + "blog" + route.url.href
              : blogRoot + route.url.href
          }
          className="blog-link"
        >
          {route.title}
        </Link>
      </h2>
      <ArticleMeta blogRoot={blogRoot} meta={route.data} tagPage={tagPage} />
      <p>{route.data.spoiler}</p>
    </article>
  );
}

export default ArticleSummary;
