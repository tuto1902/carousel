# Embla carousel wrapper for Laravel

## Installation

You can install the package via composer:

```bash
composer require tuto1902/carousel
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="carousel-migrations"
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="carousel-config"
```

This is the contents of the published config file:

```php
return [
];
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="carousel-views"
```

## Usage

```php
$carousel = new Tuto1902\Carousel();
echo $carousel->echoPhrase('Hello, Tuto1902!');
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Arturo Rojas](https://github.com/tuto1902)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
