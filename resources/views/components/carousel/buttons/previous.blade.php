@aware(['orientation'])

<x-carousel::carousel.buttons.base
    @click="api.scrollPrev()"
    @class([
        '-left-12 top-1/2 -translate-y-1/2' => $orientation == 'horizontal',
        '-top-12 left-1/2 -translate-x-1/12 rotate-90' => $orientation == 'vertical'
    ])
>
    {{ $slot }}
</x-carousel::carousel.buttons.base>