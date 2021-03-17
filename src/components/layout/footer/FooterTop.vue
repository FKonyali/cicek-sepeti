<template>
    <div class="footer__top">
        <div class="footer__top-left">
            <img src="@/assets/img/cicek-sepeti-app.png" alt="Çiçek Sepeti Mobil Uygulamayı İndirin">
        </div>
        <div class="footer__top-right">
            <div class="footer__top-r-top">
                <div class="footer__top-rt-flex">
                    <div class="footer__top-rt-qr">
                        <img src="@/assets/img/qr.png" alt="Çiçek Sepeti Mobil Uygulamayı İndirin">
                    </div>
                    <div class="footer__top-rt-right">
                        <h5>Çiçek Sepeti Mobil Uygulamayı İndirin</h5>
                        <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
                    </div>
                </div>
            </div>
            <div class="footer__top-rbot">
                <a href="#" target="_blank" title="Google Play">
                    <img src="@/assets/img/google-play.svg" alt="Google Play">
                </a>
                <a href="#" target="_blank" title="App Store">
                    <img src="@/assets/img/app-store.svg" alt="App Store">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterTop"
    }
</script>

<style lang="sass">
    .footer
        &__top
            background: #FFF
            width: 100%
            height: 222px
            border-radius: 111px
            display: flex
            align-items: center
            justify-content: center

            &-left
                margin-right: 31px
                align-self: flex-end

            &-r-top
                margin-bottom: 27px

            &-rt
                &-flex
                    display: flex
                    align-items: center

                &-qr
                    margin-right: 21px

                &-right
                    h5
                        font: 700 18px var(--mainf)
                        color: #000
                        margin-bottom: 6px

                    p
                        font: 400 16px/20px var(--mainf)
                        color: #000

            &-rbot
                display: flex

                a
                    margin-right: 11.5px

                    &:last-child
                        margin-right: 0

    @media (max-width: 400px)
        .footer
            &__top
                &-rbot
                    flex-wrap: wrap
                    justify-content: center

</style>