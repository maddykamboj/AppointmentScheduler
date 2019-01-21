import React from 'react';
import MemoryRouter from 'react-router-dom';
import {create} from 'react-test-renderer';
import mockStore from '../setup/redux-mock-store';
import AboutPage from "../../components/home/about/AboutPage";


const initState = {
    appointments: [{ id: 1,timeSlot: "9 am - 10 am", name: "First Last", phoneNum: "444-444-4444", reserved: false, isIDSelected: false },
        { id: 2,timeSlot: "10 am - 11 am", name: "First Last", phoneNum: "444-444-4444", reserved: false, isIDSelected: false },
        { id: 3,timeSlot: "11 am - 12 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false, isIDSelected: false },
        { id: 4,timeSlot: "12 pm - 1 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false, isIDSelected: false },
        { id: 5,timeSlot: "1 pm - 2 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false,isIDSelected: false },
        { id: 6,timeSlot: "2 pm - 3 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false, isIDSelected: false },
        { id: 7,timeSlot: "3 pm - 4 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false, isIDSelected: false },
        { id: 8,timeSlot: "4 pm - 5 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false, isIDSelected: false }]
}

    it('Component snapshot test ', () => {
    const store = mockStore(initState);
      const renderTest = create(
    <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/about' }]} >
          <AboutPage/>
        </MemoryRouter>
       </Provider>);
      expect(renderTest.toJSON()).toMatchSnapshot();

});

it('should add numbers', () => {
    expect(2+2).toBe(4);
});
