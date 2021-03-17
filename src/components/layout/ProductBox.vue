<template>
    <router-link to="#" class="product-box" :title="Title">
        <figure class="product-box__img">
            <img :src="require('@/assets/img/' + Image)" :alt="Title">
        </figure>
        <h3 class="product-box__title mb-2">
            {{ Title }}
        </h3>
        <div class="product-box__badge-text mb-2">
            {{ Badge }}
        </div>
        <div class="product-box__price">
            {{ transformMoney(Price) }} TL
        </div>
        <button class="product-box__btn" v-on:click="addBasket" v-if="transferObj.count == 0">
            Sepete Ekle
        </button>
        <div class="product-box__btn product-box__btn-counter" v-else>
            <button class="product-box__minus product-box__counter-btn" v-on:click="removeBasket"></button>
            <div class="product-box__count"> {{ transferObj.count }} </div>
            <button class="product-box__plus product-box__counter-btn" v-on:click="addBasket"></button>
        </div>
    </router-link>
</template>

<script>
    let allBasket = [];
    let totalMoney = 0;
    let totalCounter = 0;

    export default {
        name: "ProductBox",
        props: {
            Image: {
                type: String,
                default: ''
            },
            Title: {
                type: String,
                default: ''
            },
            Badge: {
                type: String,
                default: ''
            },
            Price: {
                type: Number,
                default: 0
            },
            AllObj: {}
        },
        computed: {
            getBasket() {
                return this.$store.getters.getBasket
            },
            getProducts() {
                return this.$store.getters.getProducts
            }
        },
        data() {
            return {
                transferObj: this.AllObj
            }
        },
        methods: {
            transformMoney(priceNumber) {
                let priceNumbertoText = priceNumber.toFixed(2);

                return (priceNumbertoText.replace('.', ','))
            },
            addBasket(e) {
                this.transferObj.count += 1;
                totalMoney += this.AllObj.price;
                totalCounter += 1;
                e.preventDefault();
            },
            removeBasket(e) {
                this.transferObj.count -= 1;
                totalMoney -= this.AllObj.price;
                totalCounter -= 1;
                e.preventDefault();
            }
        },
        watch: {
            'transferObj.count': function() {
                let index = allBasket.findIndex(x => x.id === this.AllObj.id);
                let products = this.getProducts.products;
                let indexProducts = products.findIndex(x => x.id === this.AllObj.id);
                if(index === -1) {
                    allBasket.push(this.AllObj);
                }

                if(totalCounter === 0) {
                    allBasket = []
                }

                this.$store.commit('updateBasket', {
                    ...this.getBasket,
                    products: allBasket,
                    totalMoney: totalMoney.toFixed(2) * 1,
                    totalCounter: totalCounter
                });
                
                products[indexProducts].count = this.transferObj.count
                this.$store.commit('updateProducts', {
                    ...this.getProducts,
                    products: products
                });
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/css/mixin.sass"

    .product-box
        border: 1px solid #E2E7E9
        border-radius: 10px
        padding: 15px
        display: block
        margin-bottom: 30px

        &__img
            margin-bottom: 4px
            display: flex
            align-items: center
            justify-content: center
            padding-top: 102%
            position: relative

            img
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                object-fit: cover

        &__title
            font: 600 15px/17px var(--mainf)
            color: #555555
            height: 34px
            @include text-clamp(2)

        &__badge-text
            font: 600 15px var(--mainf)
            color: #51B549
            height: 19px
            @include text-clamp(1)

        &__price
            font: 600 16px var(--mainf)
            color: #000
            margin-bottom: 3px

        &__btn
            font: 600 15px var(--mainf)
            border: 1px solid #044DC3
            border-radius: 22px
            color: #044DC3
            width: 100%
            padding: 10px 15px 11px
            text-align: center

            &-counter
                display: flex
                align-items: center
                justify-content: space-between
                padding: 5px
                border-color: #E2E7E9

        &__counter-btn
            width: 30px
            height: 30px
            border-radius: 50%
            background: #D6E6FF
            position: relative

        &__count
            font: 700 22px var(--mainf)
            color: #555555

        &__minus
            &:before
                content: ''
                width: 16px
                height: 2px
                background: #044DC3
                border-radius: 1px
                display: block
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%)

        &__plus
            &:before, &:after
                content: ''
                width: 16px
                height: 2px
                background: #044DC3
                border-radius: 1px
                display: block
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)

            &:after
                width: 2px
                height: 16px


    .mb-2
        margin-bottom: 2px

</style>