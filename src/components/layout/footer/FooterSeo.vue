<template>
    <div class="footer__seo">
        <p>
            Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek <br>gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz <br>ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. <br>Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.
        </p>
    </div>
</template>

<script>
    export default {
        name: "FooterSeo"
    }
</script>

<style lang="sass">
    .footer
        &__seo
            font: 400 15px/22px var(--mainf)
            color: #000
            text-align: center
            padding: 0 65px 49px

            a
                color: #000

    @media (max-width: 600px)
        .footer
            &__seo
                padding: 0 20px 15px

</style>