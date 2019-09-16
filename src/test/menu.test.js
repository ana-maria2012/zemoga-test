import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Menu from '../components/Menu'

const listMenu = {
	"Past trials": "Past trials",
	"Highest Rated": "How It works",
	"Login/sign up": "Login/sign up"
}


const component = shallow(<Menu listMenu={listMenu} />)

it('should render', () => {
    expect(component.length).toBe(1)
})
