import React from 'react';
import { shallow, mount, render } from 'enzyme';
import VotingButton from './src/index.js';

describe('Inital test', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<VotingButton />).contains(<button />)).toBe(true);
  });
});
