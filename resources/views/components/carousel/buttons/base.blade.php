@php

$classes = [
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-white ring-offset-gray-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/10 bg-gray-950 hover:bg-white/10 absolute size-8 rounded-full',
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