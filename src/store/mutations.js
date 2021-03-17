export default {
    updateCategories(state, data) {
        state.categories = data
    },
    updateProducts(state, data) {
        state.products = data
    },
    updateBasket(state, data) {
        state.basket = data
    },
    updateOpportunity(state, data) {
        state.opportunity = data
    }
}