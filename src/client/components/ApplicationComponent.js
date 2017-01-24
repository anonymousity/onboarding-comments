import React from 'react';
import MessageForm from './MessageForm.jsx'
import MessageContainer from './MessageContainer.jsx'

export default class ApplicationComponent extends React.Component {

	render () {
		return(
			<div>
				<MessageForm />
				<MessageContainer />
			</div>
		)
	}

}

