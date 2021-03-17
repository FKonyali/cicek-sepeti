<template>
    <router-link to="#" class="opportunity-box" :style="'background: ' + BgColor">
        <figure class="opportunity-box__img">
            <img :src="require('@/assets/img/' + Image)" alt="75 TL Üzerine Teslimat Ücreti Bizden">
        </figure>
        <div class="opportunity-box__right">
            <h2 class="opportunity-box__title">
                {{ Title }}
            </h2>
            <button class="opportunity-box__btn">
                {{ BtnName }}
            </button>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "OpportunityBox",
        props: {
            Image: {
                type: String,
                default: ''
            },
            Title: {
                type: String,
                default: ''
            },
            BtnName: {
                type: String,
                default: ''
            },
            BgColor: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="sass">
    .opportunity-box
        border-radius: 10px
        display: flex
        align-items: center
        padding: 10px
        height: 100%

        &__img
            width: 167px
            height: 133px
            border-radius: 10px
            margin-right: 35px
            background: #FFF
            overflow: hidden
            display: flex
            align-items: center
            justify-content: center

        &__right
            flex: 1

        &__title
            font: 300 24px/30px var(--mainf)
            color: #707070
            margin-bottom: 9px

        &__btn
            font: 600 13px var(--mainf)
            background: #FFF
            color: #E64E41
            padding: 6px 18px 7px
            border-radius: 15px

    @media (max-width: 1280px)
        .opportunity
            &__flex
                .col-33
                    margin-bottom: 30px

                &:last-child
                    margin-bottom: 0
                    
    @media (max-width: 400px)
        .opportunity
            &-box
                flex-direction: column

                &__img
                    margin: 0 0 15px

                &__right
                    text-align: center

</style>