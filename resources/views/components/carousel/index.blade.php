@props([
    'loop' => 'true',
    'orientation' => 'horizontal'
])

@php
$options = [
    'loop' => $loop == 'true' ? true : false,
    'duration' => 20,
    'axis' => $orientation == 'vertical' ? 'y' : 'x'
];
@endphp
<div x-data="carouselData()" x-init="init(@js($options))" class="relative w-full max-w-xs" role="region" aria-roledescription="carousel">
    <!-- Slides Viewport -->
    <div x-ref="viewport" class="overflow-hidden">
        <!-- Container -->
        <div @class([ 'flex', 'flex-col h-80' => $orientation == 'vertical' ])>
            <!-- Slides -->
            {{ $slot }}
        </div>
    </div>
    <x-carousel::carousel.buttons.previous>
        <svg class="lucide lucide-arrow-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    </x-carousel::carousel.buttons.previous>
    <x-carousel::carousel.buttons.next>
        <svg class="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    </x-carousel::carousel.buttons.next>
</div>