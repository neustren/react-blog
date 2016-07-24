// *************************************************************************
// * Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
// *
// * This file is part of Brasilcap Blog Project.
// * The complete set of authors may be found at http://www.effy.com.br
// * Unauthorized copying of this file, via any medium is strictly prohibited
// * This code can not be copied and/or distributed without the express
// * permission of EFFY
// * Effy - support@effy.com.br
// *************************************************************************

import React, { Component } from 'react';

export class FacebookComments extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1574885309478862',
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.6' // use version 2.1
            });
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
    }

    componentDidUpdate() {
    FB.XFBML.parse();
}

    render() {
        return (
            <div>
                <div className="fb-comments" data-href="https://www.facebook.com/Brasilcap/" data-numposts="10"></div>
            </div>
        );
    }
}
