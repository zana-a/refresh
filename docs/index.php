<?php
function rgb(int $a, int $b, int $c) {
    $hex = sprintf("#%02x%02x%02x", $a, $b, $c);
    return $hex;
}

$_DEFAULT_BLUE =  rgb(0, 122, 255);
$_DEFAULT_GREEN =  rgb(52, 199, 89);
$_DEFAULT_INDIGO =  rgb(88, 86, 214);
$_DEFAULT_ORANGE =  rgb(255, 149, 0);
$_DEFAULT_PINK =  rgb(255, 45, 85);
$_DEFAULT_PURPLE =  rgb(175, 82, 222);
$_DEFAULT_RED =  rgb(255, 59, 48);
$_DEFAULT_TEAL =  rgb(90, 200, 250);
$_DEFAULT_YELLOW =  rgb(255, 204, 0);

$_DARK_BLUE =  rgb(10, 132, 255);
$_DARK_GREEN =  rgb(48, 209, 88);
$_DARK_INDIGO =  rgb(94, 92, 230);
$_DARK_ORANGE =  rgb(255, 159, 10);
$_DARK_PINK =  rgb(255, 55, 95);
$_DARK_PURPLE =  rgb(191, 90, 242);
$_DARK_RED =  rgb(255, 69, 58);
$_DARK_TEAL =  rgb(100, 210, 255);
$_DARK_YELLOW =  rgb(255, 214, 10);

$_DEFAULT_GRAY_1 =  rgb(142, 142, 147);
$_DEFAULT_GRAY_2 =  rgb(174, 174, 178);
$_DEFAULT_GRAY_3 =  rgb(199, 199, 204);
$_DEFAULT_GRAY_4 =  rgb(209, 209, 204);
$_DEFAULT_GRAY_5 =  rgb(229, 229, 234);
$_DEFAULT_GRAY_6 =  rgb(242, 242, 247);

$_DARK_GRAY_1 =  $_DEFAULT_GRAY_1;
$_DARK_GRAY_2 =  rgb(99, 99, 102);
$_DARK_GRAY_3 =  rgb(72, 72, 74);
$_DARK_GRAY_4 =  rgb(58, 58, 60);
$_DARK_GRAY_5 =  rgb(44, 44, 46);
$_DARK_GRAY_6 =  rgb(28, 28, 40);

$color_array = [  "blue"=> $_DEFAULT_BLUE,
    "green"=> $_DEFAULT_GREEN,
    "indigo"=> $_DEFAULT_INDIGO,
    "orange"=> $_DEFAULT_ORANGE,
    "pink"=> $_DEFAULT_PINK,
    "purple"=> $_DEFAULT_PURPLE,
    "red"=> $_DEFAULT_RED,
    "teal"=> $_DEFAULT_TEAL,
    "yellow"=> $_DEFAULT_YELLOW,
    "gray"=> $_DEFAULT_GRAY_1,
    "gray-1"=> $_DEFAULT_GRAY_2,
    "gray-2"=> $_DEFAULT_GRAY_3,
    "gray-3"=> $_DEFAULT_GRAY_4,
    "gray-4"=> $_DEFAULT_GRAY_5,
    "gray-5"=> $_DEFAULT_GRAY_6,
    "gray-6"=> $_DARK_GRAY_2,
    "gray-7"=> $_DARK_GRAY_3,
    "gray-8"=> $_DARK_GRAY_4,
    "gray-9"=> $_DARK_GRAY_5,
    "gray-10"=> $_DARK_GRAY_6,];

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
    </head>
    <body>
        <?php
            foreach($color_array as $item => $value) {
                echo "<div class='b bc-$item'>border $item</div>" . '</br>';
            }

            foreach($border_map as $value) {
                echo "<div class='b bs-$value'>border $value</div>" . '</br>';
            }
        ?>
    </body>
</html>