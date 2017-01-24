import React from 'react'

export default class InputBox extends React.Component {

	updateFormState (evt) {
		let field = this.props.field;
		let val = evt.target.value;
		this.props.onChange(field, val);
	}

	createTextBox () {
		if(this.props.type == "text-area"){
			return <textarea rows={4} cols={100} value={this.props.value} onChange={this.updateFormState.bind(this)}></textarea>
		} else {
			return <input type={this.props.type} value={this.props.value} onChange={this.updateFormState.bind(this)}/>
		}
	}

	render () {
		let field = this.createTextBox();
		return(
			<div>
				<h5>{this.props.label}</h5>
				{field}
			</div>
		) 
	}

}