import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home';
import { Tweets } from 'pages/Tweets';

export const App = () => {
   return (
      <>
         <h1>first page</h1>
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route index element={<Home />} />
               <Route path="tweets" element={<Tweets />} />
            </Route>
         </Routes>
      </>
   );
};
