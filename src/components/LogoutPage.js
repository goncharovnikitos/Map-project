import React from 'react';
import jQuery from 'jquery';
import config from './../config';
const apiPrefix = config.apiPrefix;

export default function LogoutPage() {
    jQuery.get(apiPrefix + '/logout', function(){
        document.write('<script>location.href="/"</script>');
    });
    return (
        <div>
            Страница выхода
        </div>
    );
}