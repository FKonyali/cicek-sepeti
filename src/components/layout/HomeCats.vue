<template>
    <div class="cats">
        <h2 class="cats__title">
            <i class="icon-cats"></i>
            Kategoriler
        </h2>
        <div class="cats__list">
            <router-link to="/" class="cats__item" :class="{'cats__item--is-active': (getPath == '/cicek-sepeti/' || getPath == '/')}">
                Tüm Kategoriler
            </router-link>
            <router-link :to="category.slug" class="cats__item" :class="{'cats__item--is-active': (getPath == category.slug)}" v-for="(category) in getCategories" :key="category.id">
                <span>{{ category.title }} {{ category.count ? `(${category.count})` : '' }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeCats",
        data() {
            return {
                getPath: window.location.pathname
            }
        },
        created() {
            this.$store.dispatch('categories');
        },
        computed: {
            getCategories() {
                return this.$store.getters.getCategories
            }
        },
        watch: {
            $route(to) {
                this.getPath = to.path
            }
        }
    }
</script>

<style lang="sass">
    .cats
        margin: 0 0 20px
        overflow: hidden

        &__title
            font: 400 24px var(--mainf)
            color: #044DC3
            display: flex
            align-items: center

            i
                margin-right: 6.09px

        &__list
            display: flex
            flex-wrap: wrap
            margin: 0 -9.5px

        &__item
            width: calc(14.28% - 19px)
            text-align: center
            background: #FFF
            border-radius: 10px
            color: #707070
            border: 1px solid #E2E7E9
            padding: 14px 15px 13px
            margin: 10px 9.5px
            display: block
            font: 600 18px var(--mainf)

            span
                height: 100%
                display: flex
                align-items: center
                justify-content: center

            &--is-active
                background: #044DC3
                color: #FFF

    @media (max-width: 1520px)
        .cats
            &__item
                font-size: 16px

    @media (max-width: 1030px)
        .cats
            &__item
                width: calc(25% - 19px)

    @media (max-width: 660px)
        .cats
            &__item
                width: calc(50% - 19px)

    @media (max-width: 400px)
        .cats
            &__item
                width: calc(100% - 19px)

</style>