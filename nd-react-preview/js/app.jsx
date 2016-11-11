window.App = React.createClass({
    componentWillMount: function () {
        console.log("Initial Data: ", this.props.data);
        this.setState({
            data: this.props.data
        })
    },
    getInitialState: function(){
        return{
            activeView: 1
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
    setField: function (fieldId, value, sectionId) {
        //console.log(fieldId, sectionId, this.state.activeView, value);
        var activeView = this.state.activeView;
        var data = this.props.data;
        data = data.filter(function (item) {
            if (item.itemId == activeView) {
                var sections = item.sections.filter(function (section) {
                    if (section.sectionId == sectionId) {
                        var fields = section.fields.filter(function (field) {
                            if (field.fieldId == fieldId) {
                                field.value = value;
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
                        <AppBody data={this.getViewData()} setField={this.setField} />
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
    setField: function (fieldId, value, sectionId) {
        this.props.setField(fieldId, value, sectionId);
    },
    render: function () {
        var capture = this;
        return(
            <div>
                {
                    this.props.data.sections.map(function (section, i) {
                        return <BodySection title={section.title} sectionId={section.sectionId} fields={section.fields} type={section.type} setField={capture.setField} key={i} />;
                    })
                }
            </div>
        )
    }
})

var BodySection = React.createClass({
    setField: function(fieldId, value){
        this.props.setField(fieldId, value, this.props.sectionId);
    },
    render: function () {
        var capture = this;
        return(
            <div className="body-section">
                <h4 className="section-title">{this.props.title}</h4>
                {
                    this.props.fields.map(function (field, i) {
                        return <Field field={field} key={i} fieldId={field.fieldId} setField={capture.setField} width={field.sizeOverride ? field.width : "inherit"} clear={field.clear} options={field.options}/>
                    })
                }
            </div>    
        )
    }
})

var Field = React.createClass({
    setField: function (event) {
        this.props.setField(this.props.fieldId, event.target.value);
    },
    getField: function(){
        var field = this.props.field;
        var style = {
            width: this.props.width,
            clear: this.props.clear
        }
        switch (field.type) {
            case "text":
                return (
                    <div className="body-field-wrapper body-text-field" style={style}>
                        <label className="text-label" >{field.label}</label>
                        <input type="text" onChange={this.setField} value={field.value}/>
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