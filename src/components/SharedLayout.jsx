import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
   return (
      <>
         <h1>Hello</h1>
         <NavLink to="/">Home</NavLink>
         <NavLink to="tweets">Tweets</NavLink>

         <Outlet />
      </>
   );
};
