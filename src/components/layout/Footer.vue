<template>
    <div class="footer">
        <div class="container">
            <FooterTop />
            <FooterMid />
            <FooterSeo />
        </div>
        <FooterCopy />
    </div>
</template>

<script>
    import FooterTop from './footer/FooterTop'
    import FooterMid from './footer/FooterMid'
    import FooterSeo from './footer/FooterSeo'
    import FooterCopy from './footer/FooterCopy'

    export default {
        name: "Footer",
        components: {
            FooterTop,
            FooterMid,
            FooterSeo,
            FooterCopy
        }
    }
</script>

<style lang="sass">
    .footer
        background: #F2F2F2
        padding-top: 146px

    @media (max-width: 1030px)
        .footer
            padding: 70px 0 0

</style>