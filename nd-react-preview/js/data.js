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
                        value: ""
                    },
                    {
                        fieldId: 2,
                        type: "text",
                        label: "Last Name",
                        sizeOverride: true,
                        width: "50%",
                        clear: "both",
                        placeholder: "Doe",
                        value: ""
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
                        value: ""
                    },
                    {
                        fieldId: 3,
                        type: "text",
                        label: "Confirm Name",
                        sizeOverride: true,
                        width: "50%",
                        clear: "both",
                        placeholder: "Doe",
                        value: ""
                    }
                ]
            },
            {
                title: "Agent Address",
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
            }
        ]
    }
]