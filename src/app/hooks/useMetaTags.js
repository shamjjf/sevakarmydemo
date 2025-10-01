
import { useEffect } from "react";

function useMetaTags(meta) {
  useEffect(() => {
    // Set title
    if (meta.title) document.title = meta.title;

    // Loop over top-level keys
    Object.entries(meta).forEach(([key, value]) => {
      if (typeof value === "string" && key !== "title" && key !== "canonical") {
        let tag = document.querySelector(`meta[name="${key}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("name", key);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", value);
      }
    });

    // Canonical
    if (meta.canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", meta.canonical);
    }

    // Open Graph
    if (meta.openGraph) {
      Object.entries(meta.openGraph).forEach(([key, value]) => {
        let tag = document.querySelector(`meta[property="og:${key}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("property", `og:${key}`);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", value);
      });
    }

    // Twitter
    if (meta.twitter) {
      Object.entries(meta.twitter).forEach(([key, value]) => {
        let tag = document.querySelector(`meta[name="twitter:${key}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("name", `twitter:${key}`);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", value);
      });
    }
  }, [meta]);
}

export default useMetaTags;
