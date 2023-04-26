import styled from '@emotion/styled';

export const Card = styled.div`
   box-sizing: border-box;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;

   background-color: rgba(71, 28, 169, 1);
   width: 380px;
   min-height: 460px;

   padding: 28px 36px 36px 36px;
   margin: 40px;

   border-radius: 20px;
`;

export const LogoImage = styled.img`
   position: absolute;

   top: 20px;
   left: 20px;
`;

export const Line = styled.div`
   margin-top: 18px;
   width: 380px;
   border: 4px solid rgba(235, 216, 255, 1);
`;

export const Thumb = styled.div`
   position: absolute;
   top: 178px;

   height: 80px;
   width: 80px;
`;

export const UserImage = styled.img`
   box-sizing: border-box;
   display: block;

   object-fit: cover;
   height: 100%;
   width: 100%;
   border-radius: 50%;
   border: 8px solid rgba(235, 216, 255, 1);
`;

export const TweetsCounter = styled.p`
   color: rgba(235, 216, 255, 1);
   margin-top: 62px;

   font-size: 20px;
   line-height: 1.2;
`;

export const FollowersCounter = styled.p`
   color: rgba(235, 216, 255, 1);
   margin-top: 16px;

   font-size: 20px;
   line-height: 1.2;
`;

export const Button = styled.button`
   box-sizing: border-box;
   width: 196px;
   padding: 14px 56px;
   border-radius: 11px;
   box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25);
   border: none;

   font-size: 18px;
   line-height: 1.2;
`;
