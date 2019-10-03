# Specification for Lemonade

Lemonade is a css framework based on the Sass `.sass` stylesheet preprocessor.

This page will describe the way the framework should be laid out. 

## Architecture

The folder structure is to be kept simple.

```
.
└── sass/
    ├── lemonade.sass
    └── src/
        ├── abstracts/
        │   ├── _functions.sass
        │   ├── _mixins.sass
        │   └── _variables.sass
        ├── base/
        │   ├── _reset.sass
        │   └── _typography.sass
        ├── components/
        │   ├── _alerts.sass
        │   ├── _banner.sass
        │   ├── _billboard.sass
        │   ├── _buttons.sass
        │   ├── _cards.sass
        │   ├── _content.sass
        │   ├── _forms.sass
        │   ├── _media.sass
        │   ├── _navs.sass
        │   └── _tooltips.sass
        ├── layout/
        │   ├── _container.sass
        │   └── _grid.sass
        └── marketing/
```