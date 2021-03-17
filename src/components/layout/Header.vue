<template>
    <div class="header">
        <div class="container header__container">
            <router-link to="/" class="header__logo">
                <img src="../../assets/img/logo.svg" alt="Çiçek Sepeti">
            </router-link>
            <HeaderSearch />
            <HeaderBasket 
                :Basket="getBasket"
            />
        </div>
    </div>
</template>

<script>
    import HeaderSearch from '@/components/layout/HeaderSearch.vue'
    import HeaderBasket from '@/components/layout/HeaderBasket.vue'

    export default {
        name: 'Header',
        components: {
            HeaderSearch,
            HeaderBasket
        },
        computed: {
            getBasket() {
                return this.$store.getters.getBasket
            }
        }
    }
</script>

<style lang="sass" scoped>
    .header
        padding: 20px 0
        position: fixed
        top: 0
        left: 0
        background: #FFF
        width: 100%
        z-index: 3

        &__container
            display: flex
            align-items: center
            justify-content: space-between

        &__logo
            width: 163px
            

    @media (max-width: 660px)
        .header
            &__container
                flex-direction: column

</style>
