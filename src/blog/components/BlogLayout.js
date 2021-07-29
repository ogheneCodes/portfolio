import React from "react";
import { View, Link, NotFoundBoundary, useLoadingRoute } from "react-navi";
import siteMetadata from "../siteMetadata";
import NotFoundPage from "./NotFoundPage";
import LoadingIndicator from "./LoadingIndicator";
import styles from "./BlogLayout.module.css";

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute();

  return (
    <div className={styles.container}>
      <LoadingIndicator active={!!loadingRoute} />

      {
        // Don't show the header on index pages, as it has a special header.
        !isViewingIndex && (
          <header>
            <h1 className={styles.title}>
              <Link href={blogRoot + "blog"} className="blog-link">
                {siteMetadata.title}
              </Link>
            </h1>
            <hr />
          </header>
        )
      }

      <main>
        <NotFoundBoundary render={() => <NotFoundPage />}>
          <View />
        </NotFoundBoundary>
      </main>
    </div>
  );
}

export default BlogLayout;
