import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import List from '../components/List'

const component = shallow(<List characters={[]}/>)

it('should render', () => {
    expect(component.length).toBe(1)
})
