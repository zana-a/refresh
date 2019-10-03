# Specification for Lemonade

Lemonade is a css framework based on the Sass `.sass` stylesheet preprocessor.

This page will describe the way the framework should be laid out. 

## Architecture

The folder structure is to be kept simple.

```
sass                            # root
├── lemonade.sass               # sass entry point
└── src                         # packages root
    ├── abstracts               
    │   ├── _functions.sass     # sass functions (if any)
    │   ├── _mixins.sass        # mixins (if any)
    │   └── _variables.sass     # variables (global only)
    ├── base
    │   ├── _reset.sass         # reset for default css
    │   └── _typography.sass    # typography of base html (no class or id related styles)
    ├── components              
    │   ├── _alerts.sass        # simple alerts
    │   ├── _billboard.sass     # information header
    │   ├── _buttons.sass       # simple & grouped buttons
    │   ├── _cards.sass         # for showing user profile
    │   ├── _content.sass       # for formatting reading content
    │   ├── _forms.sass         # inputs, selectables & textarea
    │   ├── _media.sass         # nestable component for comment
    │   ├── _navs.sass          # stylised lists for both horizontal and vertical
    │   └── _tooltips.sass      # extra help on hover
    ├── layout
    │   ├── _banner.sass        # eye catching header
    │   ├── _container.sass     # constrained & flexible container
    │   └── _grid.sass          # grid system for any layout
    │── marketing               # for more specific components
    │   ├── _buttons.sass       # different colors and sizes
    │   └── _headings.sass      # stylised headings of different sizes
    └── atoms                   # utlities and tools
        ├── _ignore.sass        # eye catching header
        └── _ignore.sass        # grid system for any layout
    
```

 