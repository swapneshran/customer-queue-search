import styled from 'styled-components';
import React, {FC} from "react";
import {ProfilePicProps} from "./types";

const ProfilePicWrapper =  styled.div`
  height: 90%;
  width: 90%;
  background-color: grey;
  padding: 15px;
  margin-top: 10px;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
`;
const ProfileImage =  styled.img`
  height: 100%;
  width: 100%;
`;

const ProfilePicture: FC<ProfilePicProps> = (props) => {
    return (<ProfilePicWrapper data-testid={props["data-testid"]}>
        <ProfileImage data-testid={`${props["data-testid"]}-img`} alt={'customer-profile-img'} src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} />
    </ProfilePicWrapper>)
}

export default ProfilePicture