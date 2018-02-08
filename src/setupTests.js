import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VotingButton from './index.js';


Enzyme.configure({ adapter: new Adapter() });

describe('Inital test', () => {
  it('should render a Vote Hot prop', () => {
    // const component = shallow(<VotingButton />)

    const wrapper = shallow(
       <VotingButton />
   );
   expect(wrapper.prop('children')).toEqual('Vote Hot!');
  });

  it('should render a Vote Hot prop', () => {
    // const component = shallow(<VotingButton />)

    const wrapper = shallow(
       <VotingButton />
   );
   // component.debug()
   console.log(wrapper.debug())
   wrapper.find('[id="hotButton"]').simulate('click')
   console.log(wrapper.prop('children'))
   console.log(shallow(<VotingButton/>).instance().label)
  });
});
