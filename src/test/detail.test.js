import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Detail from '../components/Detail'

const movie = {
    bacdrop: '',
    title: '',
    slug: '',
    overview: ''
 }

 let wrapper

beforeEach(() => {
    wrapper = shallow(<Detail movies={{movies: [movie]}}/>)
})



describe('<Detail  /> rendering', () => {
    it('should render one <Detail >', () => {
        expect(wrapper.find('Detail')).toHaveLength(1)
    })
})
