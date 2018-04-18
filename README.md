<p align="center">
  <img style="width:100%;height:auto; max-width:810px" src="http://pinc.nz/git/quicksilver/quicksilver.png">
</p>

<img src="https://img.shields.io/badge/made_with-%20%20%20%E2%98%95-green.svg">
<img src="https://img.shields.io/badge/made_by-%F0%9F%92%A9%F0%9F%92%A9-dddddd.svg">
<img src="https://img.shields.io/badge/made_for-%F0%9F%92%B5-e6acca.svg">

## Requirements

* SilverStripe >= 4.0.0

## Installation

Friends don't let friends install from an archive. Use [Composer](https://getcomposer.org/).

```
composer create-project -s dev toastnz/quicksilver myNewProject
```

## QuickStatic

`QuickStatic` is a namespace for static templates - it allows you to easily separate static SS files from functional pages and controllers.

For static pagetypes, extend `StaticPage` and place your template in `themes/quicksilver/templates/QuickStatic/Layout`.


## Todo

* More helper classes
* Include QuickBlocks

## Contributing

### Code guidelines

This project follows the standards defined in:

* [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md)
* [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)
* [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
