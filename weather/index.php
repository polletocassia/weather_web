<!DOCTYPE html>
<html>


<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Weather App</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' href='assets/css/style.css'>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

</head>


<body>


    <div class="container">
        <div class="search-box">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder="Insira sua localização">
            <button class="fa-solid fa-magnifying-glass"></button>
        </div>

        <div class="not-found">
            <img src="assets/img/404.png">
            <p>Oops! Localização não encontrada!</p>
        </div>

        <div class="weather-box">
            <img src="">
            <p class="temperature"></p>
            <p class="description"></p>
        </div>

        <div class="weather-details">
            <div class="humidity">
                <i class="fa-solid fa-water"></i>
                <div class="text">
                    <span></span>
                    <p>Humidade</p>
                </div>
            </div>
            <div class="wind">
                <i class="fa-solid fa-wind"></i>
                <div class="text">
                    <span></span>
                    <p>Vento</p>
                </div>
            </div>
            <div class="dew-point">
                <i class="fa-solid fa-cloud-rain"></i>
                <div class="text">
                    <span></span>
                    <p>Ponto de Orvalho</p>
                </div>
            </div>
            <div class="visibility">
                <i class="fa-solid fa-eye"></i>
                <div class="text">
                    <span></span>
                    <p>Visibilidade</p>
                </div>
            </div>
            
        </div>
    </div>

    <script src='https://kit.fontawesome.com/7377655e67.js' crossorigin="anonymous"></script>
    <script src='assets/js/script.js'></script>
</body>


</html>