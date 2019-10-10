# Specification for Lemonade

Lemonade is a css framework based on the Sass `.scss` stylesheet preprocessor.

This page will describe the way the framework should be laid out.

## Architecture

The folder structure is to be kept simple. The following shows what the structure of the framework would look like.

```
sass
├── lemonade.scss
└── modules
    ├── abstracts
    │   ├── _functions.scss
    │   ├── _mixins.scss
    │   └── _variables.scss
    ├── atoms
    │   ├── _appearance.scss
    │   ├── _background.scss
    │   ├── _border.scss
    │   ├── _cursor.scss
    │   ├── _display.scss
    │   ├── _flexbox.scss
    │   ├── _float.scss
    │   ├── _font.scss
    │   ├── _letter.scss
    │   ├── _list.scss
    │   ├── _object.scss
    │   ├── _opacity.scss
    │   ├── _outline.scss
    │   ├── _overflow.scss
    │   ├── _pointer-events.scss
    │   ├── _position.scss
    │   ├── _resize.scss
    │   ├── _select.scss
    │   ├── _shadow.scss
    │   ├── _sizing.scss
    │   ├── _spacing.scss
    │   ├── _svg.scss
    │   ├── _table.scss
    │   ├── _text.scss
    │   ├── _v-align.scss
    │   ├── _visibility.scss
    │   ├── _whitespace.scss
    │   ├── _word-break.scss
    │   └── _z-index.scss
    ├── base
    │   ├── _reset.scss
    │   └── _typography.scss
    ├── components
    │   ├── _alerts.scss
    │   ├── _banner.scss
    │   ├── _billboard.scss
    │   ├── _buttons.scss
    │   ├── _cards.scss
    │   ├── _content.scss
    │   ├── _forms.scss
    │   ├── _media.scss
    │   ├── _navs.scss
    │   └── _tooltips.scss
    ├── layout
    │   ├── _container.scss
    │   └── _grid.scss
    └── marketing
        ├── _buttons.scss
        └── _headings.scss
```

As you can see, all files that are not the entry point are prefixed with an underscore.

Any file with multiple words within it's file name are attached to each other using a dash `-`.

Folders do not need an underscore.
