@php

$classes = [
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium dark:text-white ring-offset-gray-950/5 dark:ring-offset-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-950/5 dark:border-white/10 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 absolute size-8 rounded-full',
    $attributes->get('class')
]

@endphp
<button
    @click="{{ $attributes->get('@click') }}"
    type="button"
    @class($classes)
>
    {{ $slot }}
</button>
