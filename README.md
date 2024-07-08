# Embla carousel wrapper for Laravel

This pacakge provides a blade component wrapper for the Embla Carousel component. It allows you to incorporate a carousel component on any Laravel project by using a simple blade component and providing configuration properties to fit your specific needs.

## Requirements
- PHP 8.1+
- Laravel v10.0+
- TailwindCSS 3.4+

## Installation

You can install the package via composer:

```bash
composer require tuto1902/carousel
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="carousel-views"
```

## Usage

To get started, you can create a simple view using

```bash
php artisan make:view my-carousel-page
```

It's recommended to use a layout component so that all pages share the same boilerplate code. You can create a new layout component using

```bash
php artisan make:component AppLayout
```

This will create two files:
- app\View\Components\AppLayout.php
- resources\views\components\app-layout.php

Replace the content of `app-layout.blade.php` with the commont HTML boilerplate to be shared among all views. Here's an example of a simple layout file.

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        @vite('resources/css/app.css')
    </head>
    <body class="dark bg-white dark:bg-gray-950">
        {{$slot}}
    </body>
</html>
```

You can combine all components provided in this package to assemble your own caruosel. Here's an example. If you published the views using `php artisan vendor:publish`, you don't need to include the view namespace `x-carousel::` and you can simply use `<x-carousel>` instead. Add this content to the view we created earlier

```html
<x-app-layout>
    <x-carousel::carousel>
        <x-carousel::carousel.slide>
            <!-- The contents of each carouse slide goes here -->
            <div class="flex items-center justify-center aspect-square p-6">
                <span class="text-4xl font-semibold">
                    Slide 1
                </span>
            </div>
        </x-carousel::carousel.slide>
        <x-carousel::carousel.slide>
            <!-- You can add as many slides as you need using the carousel.slide component -->
        </x-carousel::carousel.slide>
        <!-- ... -->
    </x-carousel::carousel>
</x-app-layout>
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Arturo Rojas](https://github.com/tuto1902)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
