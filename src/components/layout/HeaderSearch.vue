<template>
    <div class="header__search">
        <i class="icon-search header__icon"></i>
        <input type="text" class="header__input" placeholder="Ürün Ara" v-model="searchFilterInput">
        <button title="Ara" class="header__button">
            Ara
        </button>
    </div>
</template>

<script>
    export default {
        name: "HeaderSearch",
        data() {
            return {
                searchFilterInput: ''
            }
        },
        computed: {
            getProducts() {
                return this.$store.getters.getProducts
            },
            productFilterList() {
                let filter = [];
                if(this.searchFilterInput.length > 2) {
                    filter = this.getProducts.products.filter((item) => {
                        return item.title.toLowerCase().includes(this.searchFilterInput.toLowerCase())
                    });
                } else {
                    filter = this.getProducts.previous
                }

                this.$store.commit('updateProducts', {
                    ...this.getProducts,
                    products: filter
                });

                return filter
            }
        },
        watch: {
            'searchFilterInput': function() {
                this.$emit('allProducts', this.productFilterList);
            }
        }
    }
</script>

<style lang="sass">
    .header
        &__search
            width: 872px
            max-width: 100%
            position: relative
            margin: 0 30px

        &__input
            background: #F7F7F7 0% 0% no-repeat padding-box
            border: 2px solid #EDF1F2
            border-radius: 28px
            width: 100%
            height: 50px
            padding: 16px 19px 16px 44px
            font: 400 15px/19px var(--mainf)

        &__button
            background: #51B549
            border: 2px solid #EDF1F2
            border-radius: 28px
            font: 400 18px/22px var(--mainf)
            color: #FFF
            padding: 7px 21px
            position: absolute
            top: 50%
            transform: translateY(-50%)
            right: 5px

        &__icon
            position: absolute
            top: 50%
            transform: translateY(-50%)
            left: 19px
            pointer-events: none


    @media (max-width: 1280px)
        .header
            &__search
                max-width: 100% 
                margin: 0 30px
                flex: 1

    @media (max-width: 660px)
        .header
            &__search
                margin-bottom: 10px

</style>