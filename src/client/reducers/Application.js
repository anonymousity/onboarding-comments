import update from 'react-addons-update';

const initialState = {
    user: 'test',
    messages: [],
    newMessage: {
    	title: '',
    	body: ''
    }
};
const Application = (state=initialState, action) =>  {
  switch (action.type){
  case 'UPDATE_FORM_DATA':
    return update(state, {newMessage: {[action.field]: {$set: action.val}}})
  case 'UPDATE_MESSAGES':
  	return update(state, {messages: {$set: action.payload}})
  case 'CLEAR_FORM':
  	return update(state, {newMessage: {$set: initialState.newMessage}})
  default:
    return state
  }
}

export default Application;
