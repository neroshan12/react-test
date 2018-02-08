import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VotingButton from './votingButton.js';


Enzyme.configure({ adapter: new Adapter() });

describe('Inital test', () => {
  it('should render a Vote Hot prop', () => {
    // const component = shallow(<VotingButton />)

    const wrapper = shallow(
       <VotingButton />
   );
   // console.log(wrapper.find('#hotButton'))
   // expect(wrapper.prop('children')).toEqual('Vote Hot!');
  });

  it('should click button', () => {
    // const component = shallow(<VotingButton />)

    const wrapper = mount(
       <VotingButton />
   );
   // component.debug()
   // expect(wrapper).toEqual('Foo')
   wrapper.find('[id="hotButton"]').simulate('click')
   expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Hello Nero, the vote stands at 1')
   // console.log(wrapper.counter)
   // console.log(wrapper.prop('children'))
   // console.log(shallow(<VotingButton/>).instance().label)
  });
});
