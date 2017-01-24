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
  default:
    return state
  }
}
export default Application;
