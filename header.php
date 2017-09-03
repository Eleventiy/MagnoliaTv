<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href = "css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
<header>
    <div class="container">
        <div class="col-lg-12 header-content">
            <div class="rozdil">
                <label><img src="img/menu.png"> &nbsp; <span>Розділи</span></label>
                <ul class="main-ul">
                    <li class="main-li"><a href="#">O нас</a></li>
                    <li class="main-li"><a href="#">Стрічка новин</a>
                        <ul class="int-ul">
                            <li class="int-li"><a href="#">правозахист</a></li>
                            <li class="int-li"><a href="#">події</a></li>
                            <li class="int-li"><a href="#">злочини</a></li>
                            <li class="int-li"><a href="#">дтп</a></li>
                            <li class="int-li"><a href="#">хабарі</a></li>
                            <li class="int-li"><a href="#">коментарі</a></li>
                        </ul>
                    </li>
                    <li class="main-li"><a href="#">телеканал чп.інфо</a>
                        <ul class="int-ul">
                            <li class="int-li"><a href="#">відеоновини</a></li>
                            <li class="int-li"><a href="#">спецрепортаж</a></li>
                            <li class="int-li"><a href="#">інтервью</a></li>
                            <li class="int-li"><a href="#">відкритим текстом</a></li>
                            <li class="int-li"><a href="#">онлайн трансляція</a></li>
                        </ul>
                    </li>
                    <li class="main-li"><a href="#">Радіо магнолія</a></li>
                    <li class="main-li"><a href="#">Думка експертів</a></li>
                    <li class="main-li"><a href="#">телеканал чп.інфо</a>
                        <ul class="int-ul">
                            <li class="int-li"><a href="#">Соціальні мережі</a></li>
                            <li class="int-li"><a href="#">Блоги</a></li>
                            <li class="int-li"><a href="#">"Шукаю свідків!"</a></li>
                            <li class="int-li"><a href="#">опитування</a></li>
                            <li class="int-li"><a href="#">написати листа</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <a class="logo" href="#"><img src="img/header-logo.png"></a>
            <div class="block-lang">
                <button class="popup" type="button" data-toggle="modal" data-target="#myModal"><img src="img/languagr-img.png"></button>
                <div id="modal_form"><!-- Сaмo oкнo -->
                    <span id="modal_close">X</span> <!-- Кнoпкa зaкрыть -->
                    <p class="enter">Вход</p>
                    <input type="email" placeholder="Почта">
                    <input type="password" placeholder="Пароль">
                    <input class="check" type="checkbox"><label class="check">Запомнить меня</label>
                    <a class="forget_passw" href="#">Забыли пароль?</a>
                    <button type="button">Войти</button>
                    <p class="enter_social">Войти с помощью</p>
                    <div class="social">
                        <a href="#"><img src="img/facebook_blue.png"></a>
                        <a href="#"><img src="img/tweet_blue.png"></a>
                        <a href="#"><img src="img/google_blue.png"></a>
                    </div>
                    <hr>
                    <a href="#" class="registration">Регистрация</a>
                    <hr>
                    <p class="alert">Нажимая кнопку входа через соцсеть, вы принимаете условия Пользовательского соглащения</p>
                </div>
                <div id="overlay"></div><!-- Пoдлoжкa -->
                <div id="custom_select">
                    <div id="current_option">
                        <span>УКР</span>
                        <b><img src="img/country.png"></b>
                    </div>
                    <ul id="custom_options">
                        <li data-value="">УКР</li>
                        <li data-value="1">EN</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>