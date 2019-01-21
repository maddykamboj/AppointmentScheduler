export const createActionClickedId = id => ({type: 'CLICKED_ID',id: id })
export const createActionAddUser = (id,name,phoneNum) => ({type: 'ADD_USER',id: id, name: name, phoneNum : phoneNum})