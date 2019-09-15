import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Search from '../components/Search'
const search = jest.fn()

const component = shallow(<Search search={search} />)

it('should render', () => {
    expect(component.length).toBe(1)
})
