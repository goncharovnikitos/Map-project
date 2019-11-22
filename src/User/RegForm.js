import React from 'react';
import axios from "axios";



export default class RegForm extends React.Component {
    state = {
        placeId: null,
        users: [1,23],
        res: null
    };
    sendForm = function(e){
        /* console.log(event);
        console.log(event.target);
        console.log(new FormData(event.target));
        // console.log(this.state);
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault(); */

        e.preventDefault();
        let _this = this;

        /* fetch(new Request('http://localhost:8080/newuser', {
            method: 'POST',
            mode: "no-cors",
            redirect: 'follow',
            headers: new Headers({
                // 'Content-Type': 'application/json'
                'Content-Type': 'multipart/form-data'
                // 'Content-Type': 'application/x-www-form-urlencoded'
            })
            // Math.random().toString(36).substring(2, 15);
        }), {
            // credentials: 'include',
            body: new FormData(e.target)
            // body: JSON.stringify({login: 'heloo', password:'dfaf'})
        }) */

        fetch('http://localhost:8080/newuser', {
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL'
            },
            // method: "POST",
            // body: {a: 1, b: 2},
            mode: "no-cors",
            method: 'POST',
            // type: 'JSON',
            body: new FormData(e.target)
            // body: JSON.stringify({login: 'heloo', password:'dfaf'}) //new FormData(e.target).json()
        })
            .then(response => response.text())
            .then(json_data => console.log(json_data));

        // let result = await response.json();
        //
        // alert(result.message);
    };
    render(){
        return (
            <div className="content1">
                <link rel="stylesheet" href="style.css"/>
                <div className="reg_form central_form">
                    {/*<form action="http://localhost:8080/newuser" method="post">*/}
                    <form onSubmit={this.sendForm} enctype="multipart/form-data" method="post">
                        <div className="title">Введите данные для регистрации</div>
                        <div className="user"><label for="reg_user">Логин: </label><input id="reg_user" type="text"
                                                                                          name="login"/>
                        </div>
                        <div className="pass"><label for="reg_pass">Пароль: </label><input id="reg_pass" type="password"
                                                                                           name="password"/>
                        </div>
                        <div className="name"><label for="reg_name">Имя: </label><input id="reg_firstName" type="text"
                                                                                        name="firstName"/>
                        </div>
                        <div className="surname"><label for="reg_surname">Фамилия: </label><input id="reg_lastName"
                                                                                                  type="text"
                                                                                                  name="lastName"/>
                        </div>
                        <div className="surname"><label for="reg_surname">Отчество: </label><input id="reg_middleName"
                                                                                                   type="text"
                                                                                                   name="middleName"/>
                        </div>
                        <div className="email"><label for="reg_email">Email: </label><input id="reg_email" type="text"
                                                                                            name="email"/>
                        </div>
                        <div className="photo"><label for="reg_email">Photo: </label><input id="reg_photo" type="text"
                                                                                            name="photo"/>
                        </div>
                        <div className="submit"><input type="submit" value="Зарегистрироваться"/></div>
                    </form>

                </div>
            </div>
        );
    }
}