<template>
    <div class="headline">
        <div class="container">
            <h1>
                ÇiçekSepeti H1
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Headline"
    }
</script>

<style lang="sass">
    .headline
        height: 74px
        background: url('../../assets/img/headline-bg.png') repeat-x
        display: flex
        align-items: center

        h1
            font: 400 35px/15px var(--mainf)
            color: #FFF
        
</style>