# NOTES

All files should define the variables before the import.

Each variable should have a prefix to ensure that variables do not collide.

.tacked [0.1]

.ttu [text-transform to uppercase]

## perhaps add these in marketing module or optional

$__outline-style-map: (
    "dotted",
    "dashed",
    "solid", 
    "double",
    "groove",
    "ridge", 
    "inset", 
    "outset",
    "hidden",
);



@each $__outline in $__outline-style-map {
    .outline-hover-#{$__outline}:hover {
        outline-style: $__outline;
    }

    .outline-active-#{$__outline}:active {
        outline-style: $__outline;
    }

    .outline-focus-#{$__outline}:focus {
        outline-style: $__outline;
    }

    .outline-visited-#{$__outline}:visited {
        outline-style: $__outline;
    }

    .outline-focus-within-#{$__outline}:focus-within {
        outline-style: $__outline;
    }
}