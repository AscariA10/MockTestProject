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
         <Button type="button">FOLLOW</Button>
      </Card>
   );
};
