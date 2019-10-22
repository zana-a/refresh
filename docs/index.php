<?php

$color_array = [
    "blue",
    "green",
    "indigo",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "yellow",
    "gray",
    "gray-1",
    "gray-2",
    "gray-3",
    "gray-4",
    "gray-5",
    "gray-6",
    "gray-7",
    "gray-8",
    "gray-9",
    "gray-10",
];

$border_map = [
  "none",
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
];

$border_radius = [
  "sm",
  "md",
  "lg",
  "xl",
  "none",
  "full"
];

?>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="./assets/css/lemonade.css">
        <style>
            div {
                padding: 16px;
            }
        </style>
    </head>
    <body>
        <div style="width: 1200px; margin: 0 auto;">
            <?php
            foreach($color_array as $item) {
                echo "<div class='b bc-$item'>border $item</div>" . '</br>';
            }

            foreach($border_map as $value) {
                if ($value == 'double') {

                } else {
                    echo "<div class='b bs-$value'>border $value</div>" . '</br>';
                }

                switch ($value) {
                    case 'groove':
                    case 'double':
                    case 'ridge':
                    case 'inset':
                    case 'outset':
                        echo "<div class='b bs-$value bw-2'>border $value (bw-2)</div>" . '</br>';
                        break;

                    default:
                        echo "<div class='b bs-$value'>border $value</div>" . '</br>';
                        break;
                }
            }

            for($i = 1; $i <= 5; $i++) {
                echo "<div class='b bw-$i'>border $i</div>" . '</br>';
            }

            foreach($border_radius as $radius) {
                echo "<div class='b br-$radius'>border radius-$radius</div>" . '</br>';
            }
            ?>
        </div>
    </body>
</html>