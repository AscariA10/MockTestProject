import { Tweet } from '../../components/Tweet/Tweet';
import { useState, useEffect } from 'react';

import { getUsers } from 'api/apiFunctions';

import { Gallery } from './Tweets.styled';

export const Tweets = () => {
   const [currentPage, setCurrentPage] = useState();
   const [users, setUsers] = useState([]);
   const [myFollowingsUsers, setMyFollowingsUsers] = useState([]);

   // const myFollowings = [];

   useEffect(() => {
      localStorage.setItem('myFollowings', JSON.stringify(myFollowingsUsers));
   }, [myFollowingsUsers.length, myFollowingsUsers]);

   useEffect(() => {
      setCurrentPage(1);
   }, []);

   useEffect(() => {
      getUsers(currentPage).then(response =>
         setUsers(prevState => {
            return [...prevState, ...response];
         })
      );
   }, [currentPage]);

   function addFollowedUser(userId) {
      setMyFollowingsUsers([...myFollowingsUsers, userId]);
      console.log(userId);
   }

   function incrementPage() {
      setCurrentPage(currentPage + 1);
   }
   return (
      <>
         <h1>TweetsPage</h1>
         <button type="button">Back</button>
         <Gallery>
            {users?.map(element => {
               return <Tweet key={element.id} props={element} addFollowedUser={addFollowedUser} />;
            })}
         </Gallery>
         <button type="button" onClick={incrementPage}>
            Load More
         </button>
      </>
   );
};
