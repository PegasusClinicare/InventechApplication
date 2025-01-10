const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Sample Create",
      subtitle: "Here is a smaple subtitle for this page",
      buttons: []
    },
    content: {
      sections: [
        // Basic Information
        {
          display: true,
          title: "Basic Information",
          subtitle: "In this section, please enter title, subtitle, description, etc.",
          inputs: [
            { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
            { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title...", style: "col-span-3" },
            { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
            { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
            { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
            { name: "aSubtitle", label: "Subtitle", type: "text", placeholder: "Please enter subtitle..." },
            { name: "aDescription", label: "Description", type: "textarea", placeholder: "Please enter description..." },
            { name: "aDetail", label: "Detail", type: "textarea", placeholder: "Please enter detail..." },
            { name: "aStatus", label: "Status", type: "select", placeholder: "--Select Status--",
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]
            },
            { name: "aSlug", label: "Slug", type: "text", placeholder: "Please enter slug..." },
          ],  
        },

        // Personal Information
        {
          display: false,
          title: "Personal Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

        // Relation Information
        {
          display: false,
          title: "Relation Information",
          subtitle: "In this section, you will see relation details.",
          inputs: [],  
        },

        // More Information
        {
          display: false,
          title: "More Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

        // Critical Information
        {
          display: false,
          title: "Critical Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

      ],
    }
  })
}

export default data