import React from 'react';

import { shallow } from 'enzyme';
import sinon from 'sinon';

import Icon from '../icon';

describe('<Icon />', () => {
    it('renders three <Foo /> components', () => {
        const wrapper = shallow(<Icon />);
    });
    
    it('renders an `.icon-star`', () => {
        const wrapper = shallow(<Icon />);
        
    });

    it('renders children when passed in', () => {
        const wrapper = shallow((
            <Icon>
                <div className="unique" />
            </Icon>
        ));
    });

    it('simulates click events', () => {
        const onButtonClick = sinon.spy();
    });
});
