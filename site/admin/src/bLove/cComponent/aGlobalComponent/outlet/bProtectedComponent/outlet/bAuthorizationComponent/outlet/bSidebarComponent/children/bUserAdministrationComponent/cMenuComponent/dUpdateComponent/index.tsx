import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent"


type MenuUpdateComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any,
    updateAPITrigger: any,
    updateAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      updateAPIResponseHandler: any
    },
    data: any,
    formSchema: any,
    formDefaultValue: any,
    previousValue: any
  },
  params: any
}

const MenuUpdateComponent = (props: MenuUpdateComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras, params } = props;

  // JSX
  return (
    <React.Fragment>
      {/* MenuUpdateComponent */}
      <TypicalUpdateComponent
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          updateAPITrigger: APICall.updateAPITrigger,
          updateAPIResponse: APICall.updateAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            updateAPIResponseHandler: extras.apiResponseHandler.updateAPIResponseHandler
          },
          data: extras.data,
          formSchema: extras.formSchema,
          formDefaultValue: extras.formDefaultValue,
          previousValue: extras.previousValue
        }} 
        params={{id: params.id}}       
      />
    </React.Fragment>      
  )
}  

export default MenuUpdateComponent;
