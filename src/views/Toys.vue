<template>
    <div class="container">
        <SmallHeadline 
            Title="Oyuncak" 
        />
        <div class="products row" v-if="getProducts.status === 'OK' && getProducts.products.length > 0">
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
        <div class="alert" v-else-if="getProducts.status == 'OK' && getProducts.products.length == 0">
            Bu kategoriye ait ürün bulunamadı :(
        </div>
    </div>
</template>

<script>
    import SmallHeadline from '@/components/layout/SmallHeadline.vue'
    import ProductBox from '@/components/layout/ProductBox.vue'

    export default {
        name: "Toys",
        components: {
            SmallHeadline,
            ProductBox
        },
        created() {
            //cat_id => 8
            if(this.getProducts.previous.length === 0) {
                this.$store.dispatch('products').then(() => {
                    let filter = this.getProducts.previous.filter((item) => {
                        return item.cat_id === 5
                    });

                    this.$store.commit('updateProducts', {
                        ...this.getProducts,
                        oldFilter:filter, 
                        products: filter
                    })
                });
            } else {
                let filter = this.getProducts.previous.filter((item) => {
                    return item.cat_id === 5
                });

                this.$store.commit('updateProducts', {
                    ...this.getProducts,
                    oldFilter:filter, 
                    products: filter
                })
            }
        },
        computed: {
            getProducts() {
                return this.$store.getters.getProducts
            }
        }
    }
</script>

<style lang="sass" scoped>
    .products
        display: flex
        flex-wrap: wrap

</style>