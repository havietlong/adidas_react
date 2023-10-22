import React from 'react'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from 'react-router-dom';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <React.Fragment key={match.pathname}>
            <NavLink to={match.pathname}>
              {breadcrumb}
            </NavLink>
            {index !== breadcrumbs.length - 1 && '|'}
          </React.Fragment>
        ))}
    </React.Fragment>
  )
}

export default Breadcrumbs