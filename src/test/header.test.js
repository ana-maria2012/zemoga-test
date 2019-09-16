import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header'

let wrapper

beforeEach(() => {
    wrapper = shallow(<Header test="test" />)
})

describe('<Header /> rendering', () => {
    it('should render one <Header>', () => {
        expect(wrapper.find('header')).toHaveLength(1)
    })

    it('should has a App-header class', () => {
        expect(wrapper.find('header').hasClass('App-header')).toEqual(true)
    })
})
