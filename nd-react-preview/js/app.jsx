window.App = React.createClass({
    componentWillMount: function () {
        console.log("Initial Data: ", this.props.data);
        this.setState({
            data: this.props.data
        })
    },
    getInitialState: function(){
        return{
            activeView: 2
        }
    },
    getViewData: function(){
        var data = this.props.data;
        var found = null;
        var activeView = this.state.activeView;
        data.filter(function (item) {
            if (item.itemId == activeView) {
                found = item;
            }
        })
        return found;
    },
    setView: function (id) {
        var data = this.props.data;
        data = data.filter(function (item) {
            if (item.itemId == id) {
                item.active = true;
            } else {
                item.active = false;
            }
            return item;
        })

        this.setState({
            data: data,
            activeView: id
        })
    },
    setValid: function (fieldId, isValid, sectionId) {
        //console.log(fieldId, sectionId, this.state.activeView, isValid);
        var activeView = this.state.activeView;
        var data = this.props.data;
        data = data.filter(function (item) {
            if (item.itemId == activeView) {
                var sections = item.sections.filter(function (section) {
                    if (section.sectionId == sectionId) {
                        var fields = section.fields.filter(function (field) {
                            if (field.fieldId == fieldId) {
                                field.isValid = isValid;
                            }
                            return field;
                        })
                        section.fields = fields;
                    }
                    return section;
                })
                item.sections = sections;
            }
            return item;
        })
        this.setState({
            data: data
        })
    },
    setField: function (fieldId, value, sectionId, conditional) {
        //console.log(fieldId, sectionId, this.state.activeView, value);
        //console.log("Conditional", conditional, "Value", value);
        var activeView = this.state.activeView;
        var data = this.props.data;
        data = data.filter(function (item) {
            if (item.itemId == activeView) {
                var sections = item.sections.filter(function (section) {
                    if (section.sectionId == sectionId) {
                        if (conditional) {
                            section.conditionField.value = value;
                        } else {
                            var fields = section.fields.filter(function (field) {
                                if (field.fieldId == fieldId) {
                                    field.isValid = isValid;
                                }
                                return field;
                            })
                            section.fields = fields;
                        }
                    }
                    return section;
                })
                item.sections = sections;
            }
            return item;
        })
        this.setState({
            data: data
        })
    },
    saveDraft: function(){
        $.ajax({
            type: "POST",
            url: "index.aspx/SaveDraft",
            data: "{json: '" + JSON.stringify(this.state.data) + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            error: function(error){
                console.log(error);
            },
            success: function (data) {
                console.log(JSON.parse(data.d));
            }
        })
    },
    render: function () {
        var capture = this;
        return(
            <div className="app-container">
                <div className="app-sidebar">
                    {
                        this.props.data.map(function (item, i) {
                            return (<SidebarItem id={item.itemId} key={i} setView={capture.setView} viewLabel={item.viewLabel} active={item.active ? "active" : "" }/>);
                        })
                    }
                    <button className="draft-button" onClick={this.saveDraft}>Save Draft</button>
                </div>
                <div className="app-body">
                    {
                        this.state.activeView != null ?
                        <AppBody data={this.getViewData()} setValid={this.setValid} setField={this.setField} />
                        :
                        null
                    }
                </div>
            </div>
        )
    }
})

var SidebarItem = React.createClass({
    setView: function () {
        this.props.setView(this.props.id);
    },
    render: function () {
        return(
            <div className="sidebar-item row" onClick={this.setView}>
                <div className="col-xs-12">
                    <div className={"item center-block " + this.props.active} >{this.props.viewLabel}</div>
                </div>
            </div>    
        )
    }
})

var AppBody = React.createClass({
    setField: function (fieldId, value, sectionId, conditional) {
        this.props.setField(fieldId, value, sectionId, conditional);
    },
    setValid: function (fieldId, isValid, sectionId) {
        this.props.setValid(fieldId, isValid, sectionId);
    },
    render: function () {
        var capture = this;
        return(
            <div>
                {
                    this.props.data.sections.map(function (section, i) {
                        return <BodySection title={section.title} sectionId={section.sectionId} conditional={section.conditional} conditionField={section.conditionField} fields={section.fields} type={section.type} setValid={capture.setValid} setField={capture.setField} key={i} />;
                    })
                }
            </div>
        )
    }
})

var BodySection = React.createClass({
    setField: function(fieldId, value, conditional){
        this.props.setField(fieldId, value, this.props.sectionId, conditional);
    },
    setValid: function(fieldId, isValid){
        this.props.setValid(fieldId, isValid, this.props.sectionId);
    },
    renderFields: function () {
        var capture = this;
        if (this.props.conditional) {
            if (this.props.conditionField.value) {
                return(
                <div>
                    <Field field={this.props.conditionField} fieldId={this.props.conditionField.fieldId} setValid={capture.setValid} setField={capture.setField} width={this.props.conditionField.sizeOverride ? this.props.conditionField.width : "inherit"} clear={this.props.conditionField.clear} options={this.props.conditionField.options }/>
                    {
                        this.props.fields.map(function (field, i) {
                            return <Field field={field} key={i} fieldId={field.fieldId} setValid={capture.setValid} setField={capture.setField} width={field.sizeOverride ? field.width : "inherit"} clear={field.clear} options={field.options}/>
                        })
                    }
                </div>
                )
            } else {
                return <Field field={this.props.conditionField} fieldId={this.props.conditionField.fieldId} setValid={capture.setValid} setField={capture.setField} width={this.props.conditionField.sizeOverride ? this.props.conditionField.width : "inherit"} clear={this.props.conditionField.clear} options={this.props.conditionField.options }/>
            }
        } else {
            return (
                this.props.fields.map(function (field, i) {
                    return <Field field={field} key={i} fieldId={field.fieldId} setValid={capture.setValid} setField={capture.setField} width={field.sizeOverride ? field.width : "inherit"} clear={field.clear} options={field.options}/>
                })    
            )
        }
    },
    render: function () {
        var capture = this;
        return(
            <div className="body-section">
                <h4 className="section-title">{this.props.title}</h4>
                {
                    this.renderFields()
                }
            </div>    
        )
    }
})

var Field = React.createClass({
    setField: function (event) {
        switch (this.props.field.allowedValues) {
            case "phone":
                var masked = VMasker.toPattern(event.target.value, "(999) 999-9999");
                this.props.setField(this.props.fieldId, masked);
                break;
            default:
                var conditional = false;
                if (this.props.field.type == "conditionalCheck") {
                    conditional = true;
                    this.props.setField(this.props.fieldId, event.target.checked, conditional);
                }
                this.props.setField(this.props.fieldId, event.target.value);
                break;
        }       
    },
    setValid: function (isValid){
        this.props.setValid(this.props.fieldId, isValid);
    },
    validate: function (e, override) {
        if (this.props.field.required) {
            if(!override){
                switch (this.props.field.allowedValues) {
                    case "all":
                        if (e.target.value == "") {
                            this.setValid(false);
                        } else {
                            this.setValid(true);
                        }
                        break;
                    case "phone":
                        if (e.target.value.length == 14) {
                            this.setValid(true)
                        } else {
                            this.setValid(false)
                        }
                        break;
                    case "email":
                        function validateEmail(email) {
                            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            return re.test(email);
                        }
                        if (validateEmail(e.target.value)) {
                            this.setValid(true)
                        } else {
                            this.setValid(false)
                        }
                        break;
                }
            } else {
                this.setValid(null);
            }
        }
    },
    focusField: function(e){
        this.validate(e, true);
    },
    getField: function(){
        var field = this.props.field;
        var style = {
            width: this.props.width,
            clear: this.props.clear
        }
        var valid = null;
        if (field.isValid) {
            valid = "valid"
        } else if(field.isValid == null) {
            valid = ""
        } else {
            valid = "invalid"
        }
        switch (field.type) {
            case "text":
                return (
                    <div className="body-field-wrapper body-text-field" style={style}>
                        <label className={field.required ? "text-label required" : "text-label " } >{field.label}</label>
                        <span className={"input-wrapper " + valid}>
                            <input type="text" onChange={this.setField} onBlur={this.validate} onFocus={this.focusField} value={field.value} />
                        </span>
                    </div>
                )
                break;
            case "conditionalCheck":
            case "check":
                return (
                    <div className="body-field-wrapper body-check-field" style={style}>
                        <input type="checkbox" id={field.conditionalId} onChange={this.setField} onBlur={this.validate} onFocus={this.focusField} value={field.value} checked={field.value}/>
                        <label className={"input-wrapper " + valid} htmlFor={field.conditionalId}></label>
                        <label className={field.required ? "text-label required" : "text-label " }>{field.label}</label>
                    </div>
                )
                break;
            case "select":
                return (
                    <div className="body-field-wrapper body-select-field" style={style}>
                        <label className="text-label">{field.label}</label>
                        <select>
                            {
                                field.options.map(function (option,i) {
                                    return <option key={i}>{option}</option>
                                })
                            }
                        </select>
                    </div>    
                )
        }
    },
    render: function () {
        return(
            <div>
                {
                    this.getField()
                }
            </div>    
        )
    }
})