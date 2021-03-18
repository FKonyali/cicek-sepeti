<template>
    <div class="header__search">
        <i class="icon-search header__icon"></i>
        <input type="text" class="header__input" placeholder="Ürün Ara" v-model="searchFilterInput" ref="input">
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
                searchFilterInput: '',
                oneRun: true,
                oldFilter: []
            }
        },
        methods: {
            toLowerCase(string) {
                var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
                string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function(letter){ return letters[letter]; })
                return string.toLowerCase();
            }
        },
        computed: {
            getProducts() {
                return this.$store.getters.getProducts
            },
            productFilterList() {
                let filter = [];
                if(this.searchFilterInput.length > 2) {
                    filter = this.getProducts.oldFilter.filter((item) => {
                        return this.toLowerCase(item.title).includes(this.toLowerCase(this.searchFilterInput))
                    });
                } else {
                    filter = this.getProducts.oldFilter
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
            },
            $route(to) {
                if(to) {
                    this.$refs.input.value = ''
                }
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