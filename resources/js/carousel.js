export function carouselData() {
    return {
        api: null,
        init(options = {}) {
            const viewportNode = this.$refs.viewport
            this.api = EmblaCarousel(viewportNode, options)
        }
    }
}
