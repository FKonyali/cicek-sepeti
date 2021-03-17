<template>
    <div class="home inner">
        <div class="container">
            <SmallHeadline 
                Title="Tüm Kategoriler"
            />
            <div class="products row" v-if="getProducts.status === 'OK'">
                <div class="col-20" v-for="(product) in getProducts.products" :key="product.id">
                    <ProductBox 
                        :Image="product.image"
                        :Title="product.title"
                        :Badge="product.badge"
                        :Price="product.price"
                        :AllObj="{...product, count: product.count || 0}"
                    />
                </div>
            </div>
            <div class="alert" v-else-if="getProducts.status === 'ERROR'">
                Ürünler yüklenemedi :(
            </div>
        </div>
        <div class="opportunity">
            <div class="container">
                <div class="opportunity__flex">
                    <div class="col-33" v-for="(item) in getOpportunity" :key="item.id">
                        <OpportunityBox 
                            :Image="item.image"
                            :Title="item.title"
                            :BtnName="item.btn_name"
                            :BgColor="item.bg_color"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SmallHeadline from '@/components/layout/SmallHeadline.vue'
    import ProductBox from '@/components/layout/ProductBox.vue'
    import OpportunityBox from '@/components/layout/OpportunityBox.vue'

    export default {
        name: 'Home',
        components: {
            SmallHeadline,
            ProductBox,
            OpportunityBox
        },
        created() {
            if(this.getProducts.products.length === 0) {
                this.$store.dispatch('products');
            }
            
            if(this.getProducts.products.length === 0) {
                this.$store.dispatch('opportunity');
            }
        },
        computed: {
            getProducts() {
                return this.$store.getters.getProducts
            },
            getOpportunity() {
                return this.$store.getters.getOpportunity
            }
        }
    }
</script>

<style lang="sass" scoped>
    .products
        display: flex
        flex-wrap: wrap

    .opportunity
        padding: 30px 0
        border-top: 2px solid #EDF1F2
        margin: 0 0 30px

        &__flex
            display: flex
            justify-content: center
            flex-wrap: wrap
            margin: 0 -20px

</style>