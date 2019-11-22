import React from 'react';



export default function AddUserForm(props) {
  /*  state = {
        placeId: null,
        users: []
    };
    let sendForm = function(){
        console.log(this.state);
    };*/
    return (
        
    <div className="content1">
        <link rel="stylesheet" href="style.css"/>
    <div className="login_form central_form"></div>
        <form action="http://localhost:8080/users" method="post">
            <div className="title">Введите данные для авторизации</div>
            <div className="user"><label for="login_user">Логин: </label><input id="login_user" type="text" name="login"/>
            </div>
            <div className="pass"><label for="login_pass">Пароль: </label><input id="login_pass" type="password" name="password"/>
            </div>
            <div className="submit"><input type="submit" value="Авторизоваться"/></div>
        </form>
    </div>
    );
}