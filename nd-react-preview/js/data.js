var addressBlock = [
                    {
                        fieldId: 1,
                        type: "text",
                        label: "Street Address",
                        sizeOverride: true,
                        width: "70%",
                        clear: "both",
                        placeholder: "346 West St.",
                        value: ""
                    },
                    {
                        fieldId: 2,
                        type: "text",
                        label: "City",
                        sizeOverride: true,
                        width: "40%",
                        clear: "left",
                        placeholder: "Smithfield",
                        value: ""
                    },
                    {
                        fieldId: 3,
                        type: "text",
                        label: "State",
                        sizeOverride: true,
                        width: "20%",
                        clear: "right",
                        placeholder: "ND",
                        value: ""
                    },
                    {
                        fieldId: 4,
                        type: "text",
                        label: "Postal Code",
                        sizeOverride: true,
                        width: "30%",
                        clear: "both",
                        placeholder: "123456",
                        value: ""
                    }
]

var dummyData = [
    {
        itemId: 1,
        viewLabel: "Contact",
        active: true,
        sections: [
            {
                title: "Contact Name",
                type: "custom",
                sectionId: 1,
                fields: [
                    {
                        fieldId: 1,
                        type: "text",
                        label: "First Name",
                        sizeOverride: true,
                        width: "50%",
                        clear: "both",
                        placeholder: "John",
                        value: "",
                        required: true,
                        allowedValues: "all",
                        isValid: null
                    },
                    {
                        fieldId: 2,
                        type: "text",
                        label: "Last Name",
                        sizeOverride: true,
                        width: "50%",
                        clear: "both",
                        placeholder: "Doe",
                        value: "",
                        required: true,
                        allowedValues: "all",
                        isValid: null
                    }
                ]
            },
            {
                title: "Home Address",
                type: "custom",
                sectionId: 2,
                fields: [
                    {
                        fieldId: 1,
                        type: "text",
                        label: "Street Address",
                        sizeOverride: true,
                        width: "70%",
                        clear: "both",
                        placeholder: "346 West St.",
                        value: "",
                        isValid: null
                    },
                    {
                        fieldId: 2,
                        type: "text",
                        label: "City",
                        sizeOverride: true,
                        width: "40%",
                        clear: "left",
                        placeholder: "Smithfield",
                        value: "",
                        isValid: null
                    },
                    {
                        fieldId: 3,
                        type: "text",
                        label: "State",
                        sizeOverride: true,
                        width: "20%",
                        clear: "right",
                        placeholder: "ND",
                        value: "",
                        isValid: null
                    },
                    {
                        fieldId: 4,
                        type: "text",
                        label: "Postal Code",
                        sizeOverride: true,
                        width: "30%",
                        clear: "both",
                        placeholder: "123456",
                        value: "",
                        isValid: null
                    }
                ]
            },
            {
                title: "Contact Methods",
                type: "custom",
                sectionId: 3,
                fields: [
                    {
                        fieldId: 1,
                        type: "text",
                        label: "Phone",
                        sizeOverride: true,
                        width: "40%",
                        clear: "both",
                        placeholder: "(xxx)-xxx-xxxx",
                        value: "",
                        isValid: null,
                        required: true,
                        allowedValues: "phone"
                    },
                    {
                        fieldId: 2,
                        type: "text",
                        label: "Email",
                        sizeOverride: true,
                        width: "50%",
                        clear: "both",
                        placeholder: "Smithfield",
                        value: "",
                        isValid: null,
                        required: true,
                        allowedValues: "email"
                    }
                ]
            }
        ]
    },
    {
        itemId: 2,
        viewLabel: "Business Information",
        active: false,
        sections: [
            {
                title: "Basic Information",
                type: "custom",
                sectionId: 1,
                fields: [
                    {
                        fieldId: 1,
                        type: "select",
                        label: "Business Type",
                        sizeOverride: true,
                        width: "60%",
                        clear: "both",
                        placeholder: "John",
                        value: "",
                        options: [
                            "Domestic Limited Liability Corporation",
                            "Foreign Limited Liability Corporation",
                            "Sole Proprietorship"
                        ]
                    },
                    {
                        fieldId: 2,
                        type: "text",
                        label: "Business Name",
                        sizeOverride: true,
                        width: "50%",
                        clear: "both",
                        placeholder: "Doe",
                        value: "",
                        isValid: null
                    },
                    {
                        fieldId: 3,
                        type: "text",
                        label: "Confirm Name",
                        sizeOverride: true,
                        width: "50%",
                        clear: "both",
                        placeholder: "Doe",
                        value: "",
                        isValid: null
                    }
                ]
            },
            {
                title: "Agent Address",
                type: "custom",
                sectionId: 2,
                conditional: true,
                conditionType: "checked",
                conditionField: {
                    fieldId: 99,
                    type: "conditionalCheck",
                    label: "Agent Address is different than Mailing Address",
                    sizeOverride: false,
                    conditionalId: "agadd_check",
                    clear: "both",
                    value: false,
                    isValid: null
                },
                fields: [
                    {
                        fieldId: 1,
                        type: "text",
                        label: "Street Address",
                        sizeOverride: true,
                        width: "70%",
                        clear: "both",
                        placeholder: "346 West St.",
                        value: "",
                        isValid: null
                    },
                    {
                        fieldId: 2,
                        type: "text",
                        label: "City",
                        sizeOverride: true,
                        width: "40%",
                        clear: "left",
                        placeholder: "Smithfield",
                        value: "",
                        isValid: null
                    },
                    {
                        fieldId: 3,
                        type: "text",
                        label: "State",
                        sizeOverride: true,
                        width: "20%",
                        clear: "right",
                        placeholder: "ND",
                        value: "",
                        isValid: null
                    },
                    {
                        fieldId: 4,
                        type: "text",
                        label: "Postal Code",
                        sizeOverride: true,
                        width: "30%",
                        clear: "both",
                        placeholder: "123456",
                        value: "",
                        isValid: null
                    }
                ]
            }
        ]
    }
]