<template>
    <div id="app">
        <div class="container">
            <Header />
        </div>
        <Headline />
        <div class="container">
            <BreadCrumb />
            <HomeCats />
        </div>

        <router-view />

        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/layout/Header.vue'
    import Headline from '@/components/layout/Headline.vue'
    import BreadCrumb from '@/components/layout/BreadCrumb.vue'
    import HomeCats from '@/components/layout/HomeCats.vue'
    import Footer from '@/components/layout/Footer.vue'

    export default {
        name: "App",
        components: {
            Header,
            Headline,
            BreadCrumb,
            HomeCats,
            Footer
        }
    }
</script>

<style lang="sass">
    @import "./assets/css/icon.sass"

    //reset
    *
        margin: 0
        padding: 0
        box-sizing: border-box

    html
        --mainf: "Source Sans Pro"
        --secondf: "Rubik"

    body
        font-family: "Arial", "sans-serif"
        overflow-x: hidden

    .container
        width: 1480px
        margin: 0 auto
        padding: 0 30px

    #app
        padding-top: 93px

    button
        cursor: pointer
        border: 0
        background: none

    ul
        list-style: none

    a
        text-decoration: none

    img
        max-width: 100%

    .col-20
        width: 20%
        padding: 0 15px
        
    .row
        margin: 0 -15px
        overflow: hidden

    .col-33
        width: 33%
        padding: 0 10px

    .inner
        min-height: 500px

    .alert
        margin: 30px 0


    @media (max-width: 1520px)
        .container
            width: 1200px

    @media (max-width: 1280px)
        .container
            width: 960px

        .col-33
            width: 100%

    @media (max-width: 1030px)
        .container
            width: 720px
        
        .col-20
            width: 33.33%

    @media (max-width: 810px)
        .container
            max-width: 100%

    @media (max-width: 660px)
        #app
            padding-top: 189px

    @media (max-width: 660px)
        .col-20
            width: 50%

    @media (max-width: 400px)
        .col-20
            width: 100%

</style>
