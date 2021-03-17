<template>
    <ul class="breadcrumb">
        <li>
            <a href="#" title="Ciceksepeti Market">
                Ciceksepeti Market
            </a>
        </li>
        <li>
            <a href="#" title="İstanbul">
                İstanbul
            </a>
        </li>
        <li class="breadcrumb--is-active">
            <a href="#" title="CiceksepetiBreadCrumb">
                CiceksepetiBreadCrumb
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "BreadCrumb"
    }
</script>

<style lang="sass">
    .breadcrumb
        display: flex
        align-items: center
        flex-wrap: wrap
        font: 400 13px/30px var(--mainf)
        color: #555555

        li
            display: flex
            align-items: center

            &:after
                content: ''
                width: 5px
                height: 5px
                display: block
                border-width: 1px
                border-style: solid
                border-color: #555555 transparent transparent #555555
                transform: matrix(-0.71, 0.71, -0.71, -0.71, 0, 0)
                margin: 0 5px 0 2px

            &:last-child
                &:after
                    display: none

        a
            text-decoration: none
            color: #555555

        &--is-active
            a
                color: #51B549

</style>