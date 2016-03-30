<p align="center">
  <img style="width:100%;height:auto; max-width:810px" src="http://pinc.nz/git/quicksilver/quicksilver.png">
</p>

<img src="https://img.shields.io/badge/made_with-%20%20%20%E2%98%95-green.svg">
<img src="https://img.shields.io/badge/made_by-%F0%9F%92%A9%F0%9F%92%A9-dddddd.svg">
<img src="https://img.shields.io/badge/made_for-%F0%9F%92%B5-e6acca.svg">

# Manhandling your SilverStripe installation

Have you ever installed SilverStripe and wondered, "Gee whiz, I really wish someone would force a bunch of modules down my throat so I don't have to think for myself!" No? That's fine, the whole point of this module is to cowboy your SilverStripe installation with modules and defaults we reckon are A-Okay. Just install, sit back, and pretend you're a hacker while you watch the Composer output fly through your console like the majestic f#!king programmer you are. 

## Installation

Friends don't let friends install from an archive. Use [Composer](https://getcomposer.org/).

```
composer create-project -s dev toastnz/quicksilver myNewProject
```

## Make that a combo

Includes a bunch of other modules with equally made-up names.

* [Flat CMS](https://github.com/toastnz/flat-cms) - Because we just don't have time for gradients
* [Toast SEO](https://github.com/toastnz/toast-seo) - Meta fields your SEO company will forget to populate before live
* [Open Graph Meta](https://github.com/toastnz/open-graph-meta) - Your clients don't understand what Open Graph is, and you don't have to either
* [Twitter Card Meta](https://github.com/toastnz/twitter-card-meta) - #twitterpro #iknowwhatimdoing #trending
* [Fill Form](https://github.com/toastnz/fill-form.git) - Command + Shift + F fills in allll the form fields

## For the love of god, read this step

Locate the `_ss_environment` file (pro tip - it's in the root). Rename this to `_ss_environment.php` and adjust the credentials. 

## Contributing

### Code guidelines

This project follows the standards defined in:

* [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md)
* [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)
* [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
