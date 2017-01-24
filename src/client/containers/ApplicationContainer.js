import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'
import { updateAction } from 'Actions'

const mapStateToProps = ( state, props ) => {
    return {
      ...state.Application
    }
}

const mapDispatchToProps = (dispatch) => {

  //This is here for convenience.

  // var exceptions = {
  //   //If you need to, add an exception here.
  //   // eg:
  //   // myFunction:function someExample(){}
  // };

  // Object.keys(actions).forEach((key) => {
  //   var functionObj;
  //   if (key in exceptions) {
  //     actions[key] = exceptions[key];
  //   }else{
  //     functionObj = actions[key];
  //     actions[key] = function(){
  //       dispatch(functionObj.apply(null,arguments));
  //     };
  //   }
  // });

  // return actions;
  return {
    doThing: function () {
      return dispatch(updateAction())
    }
  };
}

const ApplicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationComponent)

export default ApplicationContainer
