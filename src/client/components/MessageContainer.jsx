import React from 'react';
import { connect } from 'react-redux'
import { asyncGetMessagesAction } from 'Actions'

class MessageContainer extends React.Component {

	componentWillMount () {
		this.props.fetchMessages();
	}

	generateMessages () {
		return this.props.messages.map(function(msg, idx){
			return  <div key={idx}>
								<h3>{msg.title}</h3>
								<p>{msg.body}</p>
						 	</div>
		})
	}

	render () {
		let messages = this.generateMessages();
		return(
			<div>
				<h1>Some Messages Go Here</h1>
				{messages}
			</div>
		)
	}

}

const mapStateToProps = (state, props) => {
	return {
		messages: state.Application.messages
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMessages: function() {
			dispatch(asyncGetMessagesAction());
		}
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageContainer)
