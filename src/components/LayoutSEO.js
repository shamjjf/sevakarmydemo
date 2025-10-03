import { useLocation } from "react-router-dom";
const Layout_SEO = ({ children }) => {
  const location = useLocation();

  const generateTitle = (path) => {
    if (!path) return "Default Title";
    const parts = path.slice(1).split("/");
    const mainTitle = parts[0]
      .split("-")
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" ");

    const subRoute = parts
      .slice(1)
      .join("/")
      .split("-")
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" ");

    return subRoute ? `${mainTitle}: ${subRoute}` : mainTitle;
  };

  const title = generateTitle(location.pathname);
  return (
    <>
      <title>SevakArmy {title ? "- " + title : ""}</title>
      {children}
    </>
  );
};
export default Layout_SEO;
