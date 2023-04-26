import { Tweet } from '../../components/Tweet/Tweet';
import { useState, useEffect } from 'react';

import { getUsers } from 'api/apiFunctions';

import { Gallery } from './Tweets.styled';

export const Tweets = () => {
   const [users, setUsers] = useState();

   useEffect(() => {
      getUsers().then(response => setUsers(response));
   }, []);
   console.log('users', users);

   return (
      <>
         <h1>TweetsPage</h1>
         <button type="button">Back</button>
         <Gallery>
            {users?.map(element => {
               return <Tweet key={element.id} props={element} />;
            })}
         </Gallery>
      </>
   );
};
