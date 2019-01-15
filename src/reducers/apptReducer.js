const initState = {
    appointments: [{ id: 1,timeSlot: "9 am - 10 am", name: "First Last", phoneNum: "444-444-4444", reserved: false },
        { id: 2,timeSlot: "10 am - 11 am", name: "First Last", phoneNum: "444-444-4444", reserved: false },
        { id: 3,timeSlot: "11 am - 12 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false },
        { id: 4,timeSlot: "12 pm - 1 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false },
        { id: 5,timeSlot: "1 pm - 2 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false },
        { id: 6,timeSlot: "2 pm - 3 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false },
        { id: 7,timeSlot: "3 pm - 4 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false },
        { id: 8,timeSlot: "4 pm - 5 pm", name: "First Last", phoneNum: "444-444-4444", reserved: false }]
    }


const orderReducer = (state = initState,action) => {

    console.log(`action id: ${action.id}`);


    let index = action.id - 1;

    console.log('index');
    console.log(index);

    switch(action.type) {
        case 'ADD_USER' :
            console.log('Inside ADD_USER');

            let newAppointments = state.appointments.filter(appointment => {
                return  action.id = appointment.id
            });
            newAppointments[index].name = action.name
            newAppointments[index].phoneNum = action.phoneNum
            newAppointments[index].reserved = true
        return {
            ...state,
            appointments: newAppointments
        }
        default:
            return initState;
    }
}




//      //  debugger;
        //         return [...state,
        //         Object.assign({}, action.name, action.phoneNum)
        // ];
        //    return Object.assign({}, initState, {
        //         appointments: initState.appointments.map(appointment => {
        //             if (appointment.id !== action.id) {
        //                 return appointment
        //             }
        //
        //             return Object.assign({}, appointment, {
        //                 name: action.name
        //             })
        //         })
        //     })


export default orderReducer;