import { NavLink, useLocation, type NavLinkProps } from "react-router-dom";

type QueryLinkProps = NavLinkProps & {
  to: string;
}

export default function QueryLink({ to, ...props }: QueryLinkProps ) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
