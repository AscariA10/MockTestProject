import { Tweet } from '../../components/Tweet/Tweet';
import { useState, useEffect } from 'react';

import { getUsers } from 'api/apiFunctions';

import { Gallery } from './Tweets.styled';

export const Tweets = () => {
   const [users, setUsers] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
      getUsers(currentPage).then(response =>
         setUsers(prevState => {
            return [...prevState, ...response];
         })
      );
   }, [currentPage]);
   console.log('currentPage', currentPage);

   function incrementPage() {
      setCurrentPage(currentPage + 1);
   }
   return (
      <>
         <h1>TweetsPage</h1>
         <button type="button">Back</button>
         <Gallery>
            {users?.map(element => {
               return <Tweet key={element.id} props={element} />;
            })}
         </Gallery>
         <button type="button" onClick={incrementPage}>
            Load More
         </button>
      </>
   );
};
