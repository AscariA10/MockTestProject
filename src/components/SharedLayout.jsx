import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
   return (
      <>
         <header>
            <nav>
               <NavLink to="/">Home</NavLink>
               <NavLink to="tweets">Tweets</NavLink>
            </nav>
         </header>
         <main>
            <Outlet />
         </main>
         <footer>created by WK</footer>
      </>
   );
};
