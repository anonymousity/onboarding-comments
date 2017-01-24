import React from 'react';
import { connect } from 'react-redux'
import { updateFormAction, asyncPostAction } from 'Actions'
import InputBox from './InputBox.jsx';

class MessageForm extends React.Component {
	
	render () {
		return(
			<section>
					<InputBox 
						label="Title:"
						type="text"
						value={this.props.title}
						onChange={this.props.updateForm}
						field="title"
					/>
					<InputBox 
						label="Body:"
						type="text-area"
						value={this.props.body}
						onChange={this.props.updateForm}
						field="body"
					/>
					<button onClick={this.props.postData.bind(this)}>Submit</button>
			</section>
		)
	}

}

const mapStateToProps = ( state, props ) => {
    return {
      ...state.Application.newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateForm: function (field, val) {
      return dispatch(updateFormAction(field, val));
    },
    postData: function () {
    	return dispatch(asyncPostAction(this.props));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageForm)
