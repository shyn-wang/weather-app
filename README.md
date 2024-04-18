<!DOCTYPE html>
<html>
  <head>
    <title> cocoweather </title>
    <link href="css/cloud-animation.css" rel="stylesheet">
    <Link rel = "stylesheet" href = "css/Weather.CSS">
  </head>
  <body>
    <h1 id="title">
      cocoweather
    </h1>
    <div class = "container">
      <form action = "" class = "search-bar">
        <input type = "text" id = "locationInput" placeholder="enter a location">
        <button type = "button" class = "ButtonEnter" onclick="setValue(), getWeather(), widgetVisabilityToggle()"><img src="images/search.png"
          width = '25'
          height = '25'
        ></button>
      </form>
    </div>
    <script src="script.js"></script>
    <script>
      function setValue(){
        var location = document.getElementById('locationInput').value;
      }
    </script>
    <div class = 'test'>
      <div class = 'widget-bar' id = 'condition-info' style = 'display: none;' ></div>
      <div class = 'widget-bar' id = 'temp-info' style = "display: none;" ></div>
 </div>
  </body>
</html>
</html>
