import { useState } from 'react';

import {
   Card,
   LogoImage,
   Thumb,
   UserImage,
   Line,
   TweetsCounter,
   FollowersCounter,
   Button,
} from './Tweet.styled';
// import logo from '.../images/logo.png';
import cardImage from 'images/card-image.png';
import logo from 'images/Logo.svg';

export const Tweet = ({ props }) => {
   const { avatar, tweets, followers } = props;

   const [follow, setFollow] = useState(false);

   const handleClick = () => {
      setFollow(!follow);
   };

   return (
      <Card>
         <LogoImage src={logo} alt="logo" />

         <img src={cardImage} alt="cardImage" />
         <Line></Line>
         <Thumb>
            <UserImage src={avatar} alt="userPhoto" />
         </Thumb>
         <TweetsCounter>
            {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} TWEETS
         </TweetsCounter>
         <FollowersCounter>
            {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} FOLLOWERS
         </FollowersCounter>
         <Button
            type="button"
            onClick={handleClick}
            style={{ backgroundColor: follow ? 'rgb(92, 211, 168)' : 'rgba(235, 216, 255, 1)' }}
         >
            {follow ? 'FOLLOWING' : 'FOLLOW'}
         </Button>
      </Card>
   );
};
