export function carouselData() {
    return {
        api: null,
        init() {
            const viewportNode = this.$refs.viewport
            this.api = EmblaCarousel(viewportNode)
        }
    }
}
