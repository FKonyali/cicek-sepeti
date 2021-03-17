<template>
    <button class="header__basket" :class="{'header__basket--is-active' : Basket.totalCounter > 0}">
        <i class="icon-basket"></i>
        Sepetim
        <div class="header__basket--count">{{ Basket.totalCounter }}</div>
        <div class="header__progress">
            <div class="header__progress--top">
                <div v-if="(constMoney - Basket.totalMoney) > 0">
                    <span class="header__progress--yellow">
                        <i class="icon-blitz"></i> {{ (constMoney - Basket.totalMoney).toFixed('2').replace('.00', '') }} TL
                    </span>
                    ürün daha ekleyin kargo bedava
                </div>
                <div v-else>
                    <span class="header__progress--yellow">
                        <i class="icon-blitz"></i>
                    </span>
                    Kargonuz Bedava
                </div>
            </div>
            <div class="header__progress--bar">
                <div class="header__progress--bar-percent" :style="'width:' + calc + '%'"></div>
            </div>
        </div>
    </button>
</template>

<script>
    export default {
        name: "HeaderBasket",
        props: {
            Basket: {}
        },
        data() {
            return {
                constMoney: 500,
                calc: 0
            }
        },
        watch: {
            'Basket': function() {
                let percent = (this.Basket.totalMoney * 100) / this.constMoney;

                if(this.Basket.totalMoney > this.constMoney) {
                    this.calc = 100;
                } else {
                    this.calc = Math.floor(percent);
                }
            }
        }
    }
</script>

<style lang="sass">
    $secondf: 'Rubik'

    .header
        $headerBasket: &

        &__basket
            background: #044DC3
            border-radius: 28px
            color: #fff
            font: 600 16px/20px var(--mainf)
            padding: 15px 33px 15px 25px
            display: flex
            align-items: center
            position: relative

            &:hover
                #{$headerBasket}
                    &__progress
                        opacity: 1
                        visibility: visible
                        transition: opacity 300ms

            i
                margin-right: 3.59px

            &--is-active
                #{$headerBasket}
                    &__progress
                        opacity: 1
                        visibility: visible
                        transition: opacity 300ms

            &--count
                width: 25px
                height: 25px
                border-radius: 50%
                background: #FF5B4D
                position: absolute
                top: -5px
                right: -5px
                font: 400 16px/19px var(--secondf)
                display: flex
                align-items: center
                justify-content: center

        &__progress
            position: absolute
            top: 100%
            right: 0
            background: #F54257
            width: 343px
            padding: 17px 17px 14.4px 17px
            border-radius: 10px
            margin: 10px 0 0
            opacity: 0
            visibility: hidden
            transition: opacity 300ms
            
            &:before
                content: ''
                border-style: solid
                border-width: 0px 7px 7px 7px
                border-color: transparent transparent #F54257 transparent
                position: absolute
                bottom: 100%
                right: 55px

            &--top
                text-align: left
                font: 600 15px var(--mainf)

            &--bar
                width: calc(100% - 30px)
                height: 5px
                border-radius: 22px
                background: #D01D32
                margin: 11px 15px 0

                &-percent
                    background: #FFCE00
                    border-radius: 22px
                    height: 5px
                    width: 0px
                    transition: width 300ms

    @media (max-width: 631px)
        .header
            &__progress
                width: 200px

</style>