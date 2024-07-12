# Embla carousel wrapper for Laravel

[![Latest Version on Packagist](https://img.shields.io/packagist/v/tuto1902/carousel.svg?style=flat-square)](https://packagist.org/packages/tuto1902/carousel)
[![Total Downloads](https://img.shields.io/packagist/dt/tuto1902/carousel.svg?style=flat-square)](https://packagist.org/packages/tuto1902/carousel)

This pacakge provides a blade component wrapper for the Embla Carousel component. It allows you to incorporate a carousel component on any Laravel project by using a simple blade component and providing configuration properties to fit your specific needs.

## Requirements
- PHP 8.2+
- Laravel v10.0+
- TailwindCSS 3.4+
- AlpineJS 3.14+

## Installation

You can install the package via composer:

```bash
composer require tuto1902/carousel
```

Add the following line to `resources\js\app.js`. Make sure to add this line at the beginning of the file, or at least before AlpineJS is initialized.

```js
import './../../vendor/tuto1902/carousel/resources/dist/carousel'
```

Add the following line to `tailwind.config.js` inside the content section

```diff
export default {
  presets: [],
  content: [
    ...
+    './vendor/tuto1902/carousel/resources/**/*.blade.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then, compile all your assets using Vite

```bash
npm run build
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

Replace the content of `app-layout.blade.php` with the common HTML boilerplate to be shared among all views. Here's an example of a simple layout file.

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
    @vite('resources/js/app.js')
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

Finally, create a new route to see your new carousel in action.

```php
use Illuminate\Support\Facades\Route;

Route::view('/', 'my-carousel-page');
```

You can include any of the following parameters to further customize the looks and feel of the carousel. For example, using the `loop` parameter, the carousel will loop around after reaching the last/first slide.

```html
<x-carousel::carousel loop="true">
    ...
</x-carousel::carousel>
```

Here's a list of all available properties

| Property |  Accepted Values | Description |
|----------|------------------|-------------|
| loop | true/false | Loop back whean reaching the last/first slide |
| orientation | horizontal/vertical | Changes the carousel orientation |
| autoplay | true/false | When enabled, slides will autoplay after a delay |
| delay | number | Controls the delay of the carousel autoplay in miliseconds. Default is 4000 (4 seconds) |
| size | string | Controls the size of the carousel. You can use any valid Tailwind CSS class. Default value is `size-96`. See [Tailwind CSS Documentation](https://tailwindcss.com/docs/size) for all possible values. |

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Arturo Rojas](https://github.com/tuto1902)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
