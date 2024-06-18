export function carouselData() {
    return {
        api: null,
        init(options = {}, autoplay = false, autoplayOptions = {}) {
            const viewportNode = this.$refs.viewport
            if (autoplay) {
                this.api = EmblaCarousel(viewportNode, options, [
                    Autoplay(autoplayOptions)
                ])
            } else {
                this.api = EmblaCarousel(viewportNode, options)
            }
        }
    }
}
