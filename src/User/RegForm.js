import React from 'react';



export default function RegForm(props) {
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
        <div className="reg_form central_form">
            <form action="http://localhost:8080/newuser" method="post">
                <div className="title">Введите данные для регистрации</div>
                <div className="user"><label for="reg_user">Логин: </label><input id="reg_user" type="text" name="login"/>
                </div>
                <div className="pass"><label for="reg_pass">Пароль: </label><input id="reg_pass" type="password" name="password"/>
                </div>
                <div className="name"><label for="reg_name">Имя: </label><input id="reg_firstName" type="text" name="firstName"/>
                </div>
                <div className="surname"><label for="reg_surname">Фамилия: </label><input id="reg_lastName" type="text" name="lastName"/>
                </div>
                <div className="surname"><label for="reg_surname">Отчество: </label><input id="reg_middleName" type="text" name="middleName"/>
                </div>
                <div className="email"><label for="reg_email">Email: </label><input id="reg_email" type="text" name="email"/>
                </div>
                <div className="photo"><label for="reg_email">Photo: </label><input id="reg_photo" type="text" name="photo"/>
                </div>
                <div className="submit"><input type="submit" value="Зарегистрироваться"/></div>
            </form>
            <div class="not_login">
                Вы зарегистрированы? Пройдите по
                <a href="http://localhost:8080/users" className="">ссылке</a>
            </div>
        </div>
        </div>
);
}