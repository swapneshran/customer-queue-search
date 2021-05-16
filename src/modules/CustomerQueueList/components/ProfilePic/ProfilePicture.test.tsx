import React from 'react';
import {render} from '@testing-library/react';
import ProfilePicture from './ProfilePicture';
import {ProfilePicProps} from "./types";

const profilePicProps : ProfilePicProps = {
    "data-testid": "test-datatest-id"
}

const setup = () => {
    const profilePic= render(<ProfilePicture  {...profilePicProps} />)
    return {
        profilePic
    }
}

test('renders profile pic component with image', async () => {
    const { profilePic } = setup()
    expect(profilePic.findAllByTestId('test-datatest-id-img')).toBeDefined()
});

