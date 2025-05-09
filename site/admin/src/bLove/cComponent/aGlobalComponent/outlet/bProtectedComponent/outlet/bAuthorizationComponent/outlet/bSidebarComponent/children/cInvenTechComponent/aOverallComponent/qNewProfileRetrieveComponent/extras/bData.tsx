const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Product Information",
      subtitle: "Here's a list of your tasks for this month!",
      buttons: []
    },
    content: {
      sections: (
        // APICall.retrieveAPIResponse.isLoading ? null : 
        //   APICall.retrieveAPIResponse.isError ? null :
        //     APICall.retrieveAPIResponse.isSuccess ? (
        //       APICall.retrieveAPIResponse.data.success ? (
                [
                  // Basic Information
                  {
                    display: false,
                    title: "Basic Information",
                    subtitle: "In this section, please enter title, subtitle, description, etc.",
                    values: [],  
                  },
          
                  // Personal Information
                  {
                    display: false,
                    title: "Personal Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [],  
                  },
          
                  // Relation Information
                  {
                    display: false,
                    title: "Relation Information",
                    subtitle: "In this section, you will see relation details, you will see relation details.",
                    values: [],  
                  },
          
                  // More Information
                  {
                    display: false,
                    title: "More Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [],  
                  },
          
                  // Critical Information
                  {
                    display: false,
                    title: "Critical Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [],  
                  },

                  // General Information
                  {
                    display: true,
                    title: "General Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "ID", value: "1234567", type: "normal" },
                      { label: "Name", value: "John Wick", type: "normal" },
                      { label: "Contact", value: "+91-9876543210", type: "normal" },
                      { label: "Email", value: "hello@inventech.com", type: "normal", style: "col-span-2" },

                      { label: "Address", value: "Near Blue Ridge, Beside Green Grooves", type: "normal", style: "col-span-2" },
                      { label: "Location", value: "Pune", type: "normal" },
                      { label: "Username", value: "hello_angel", type: "normal" },                      
                    ],  
                  },

                  // Supplier Details
                  {
                    display: false,
                    title: "Supplier Details",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Supplier Name", value: "Vinayak", type: "normal" },
                      { label: "Contact Person Name", value: "Gully Gang Boy", type: "normal" },
                      { label: "Contact", value: "+298-29787826-1789", type: "normal" },
                      { label: "Email", value: "punya.paap.punya.paap@divine.com", type: "normal", style: "col-span-2" },

                      { label: "Address", value: "Near Vinayakrao Deshmukh High School, Shantinagar, California, Steet 81", type: "normal", style: "col-span-5" },

                      { label: "Country", value: "USA", type: "normal" },
                      { label: "State", value: "Florida", type: "normal" },
                      { label: "City", value: "Miami", type: "normal" },
                      { label: "PIN", value: "1293821", type: "normal" },
                      { label: "Currency", value: "INR", type: "normal" },
                    ],  
                  },
                                    
                ]
            // ) : []
            // ) : []
      )
    }
  })
}

export default data