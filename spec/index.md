# Specification for Lemonade

Lemonade is a css framework based on the Sass `.sass` stylesheet preprocessor.

This page will describe the way the framework should be laid out. 

## Architecture

The folder structure is to be kept simple.

```
sass
├── lemonade.sass
└── src
    ├── abstracts
    │   ├── _functions.sass
    │   ├── _mixins.sass
    │   └── _variables.sass
    ├── atoms
    │   ├── _appearance.sass
    │   ├── _background.sass
    │   ├── _border.sass
    │   ├── _cursor.sass
    │   ├── _display.sass
    │   ├── _flexbox.sass
    │   ├── _float.sass
    │   ├── _font.sass
    │   ├── _letter.sass
    │   ├── _list.sass
    │   ├── _object.sass
    │   ├── _opacity.sass
    │   ├── _outline.sass
    │   ├── _overflow.sass
    │   ├── _pointer-events.sass
    │   ├── _position.sass
    │   ├── _resize.sass
    │   ├── _select.sass
    │   ├── _shadow.sass
    │   ├── _sizing.sass
    │   ├── _spacing.sass
    │   ├── _svg.sass
    │   ├── _table.sass
    │   ├── _text.sass
    │   ├── _v-align.sass
    │   ├── _visibility.sass
    │   ├── _whitespace.sass
    │   ├── _word-break.sass
    │   └── _z-index.sass
    ├── base
    │   ├── _reset.sass
    │   └── _typography.sass
    ├── components
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
    ├── layout
    │   ├── _container.sass
    │   └── _grid.sass
    └── marketing
        ├── _buttons.sass
        └── _headings.sass
```
 
