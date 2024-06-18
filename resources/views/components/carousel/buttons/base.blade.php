@php

$classes = [
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-white ring-offset-gray-950 transition-colors focus-visible:outline-none focus-visible:ring-2 dark:focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-amber-500/50 dark:border-amber-400/50 bg-amber-600 dark:bg-amber-500 hover:bg-amber-500 dark:hover:bg-amber-400 absolute size-8 rounded-full',
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