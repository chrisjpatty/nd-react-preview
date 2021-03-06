﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="nd_react_preview.WebForm1" ValidateRequest="false" %>
<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.17.0/babel.min.js"></script>
    <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/vanilla-masker/1.0.9/vanilla-masker.min.js"></script>
    <script type="text/javascript" src="js/xml2json.min.js"></script>
    <script type="text/babel" src="js/app.jsx"></script>
    <script type="text/javascript" src="js/data.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
    <style>
        
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <div class="center-block app-wrapper" id="app">

                </div>
            </div>
        </div>
    </div>
    <script type="text/babel">
        ReactDOM.render(
            <window.App data={dummyData} />,
            document.getElementById('app')
        );
    </script>
</body>
</html>
