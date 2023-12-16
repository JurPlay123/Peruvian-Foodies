<!DOCTYPE html>
<html lang="es-419">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Todo sobre la cocina peruana para que seas un gran cocinero.">
    <meta name="author" content="Jurghan Ascarza">
    <meta name="copyright" content="Peruvian Foodies">
    <title>Inicio - Peruvian Foodies</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Google tag (gtag.js) -->
    <!--
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7NGSD9BFT3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-7NGSD9BFT3');
    </script> -->
  </head>
  <body>
    <?php
      require("container/header.php");
      require("container/index/presentation.php");
      require("container/index/about_us.php");
      require("container/index/recipes.php");
      require("container/index/value_recipes.php");
      require("container/footer.php");
    ?>
  </body>

  <!--Scripts-->
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  <script src="js/script.js"></script>
</html>
