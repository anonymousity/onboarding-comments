//Actions file
export function sillyAction(){
    return {
        type:'SILLY_ACTION'
    }
}

export function updateAction(field, val){
		return {
			type: 'UPDATE_FORM_DATA',
			field: field,
			val: val
		}
}