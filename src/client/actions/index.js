//Actions file
export function updateFormAction(field, val){
		return {
			type: 'UPDATE_FORM_DATA',
			field: field,
			val: val
		}
}

export function clearFormAction(){
	return {
		type: 'CLEAR_FORM'
	}
}

export function asyncPostAction(state){
	return function(dispatch){
		return fetch('/messages', {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, method: 'POST', body: JSON.stringify(state)}).then(function(){
			dispatch(clearFormAction())
		})
	}
}