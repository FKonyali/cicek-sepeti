<template>
    <div class="small-headline">
        <i class="icon-all-cat"></i>
        {{ Title || "Tüm Kategoriler" }}
    </div>
</template>

<script>
    export default {
        name: "SmallHeadline",
        props: {
            Title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="sass">
    .small-headline
        display: flex
        align-items: center
        font: 300 20px/30px var(--mainf)
        color: #707070
        margin-bottom: 10px

        i
            margin-right: 5.2px

</style>