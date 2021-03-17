<template>
    <div class="container">
        <SmallHeadline 
            Title="Petshop" 
        />
        <div class="products row" v-if="getProducts.status === 'OK' && newData.products.length > 0">
            <div class="col-20" v-for="(product) in newData.products" :key="product.id">
                <ProductBox 
                    :Image="product.image"
                    :Title="product.title"
                    :Badge="product.badge"
                    :Price="product.price"
                    :AllObj="{...product, count: product.count || 0}"
                />
            </div>
        </div>
        <div class="alert" v-else-if="getProducts.status == 'OK' && newData.products.length == 0">
            Bu kategoriye ait ürün bulunamadı :(
        </div>
    </div>
</template>

<script>
    import SmallHeadline from '@/components/layout/SmallHeadline.vue'
    import ProductBox from '@/components/layout/ProductBox.vue'

    export default {
        name: "Petshop",
        components: {
            SmallHeadline,
            ProductBox
        },
        data() {
            return {
                newData: []
            }
        },
        created() {
            //cat_id => 12
            if(this.getProducts.products.length === 0) {
                this.$store.dispatch('products').then(() => {
                    let filter = this.getProducts.products.filter((item) => {
                        return item.cat_id === 12
                    });

                    this.newData = {
                        ...this.getProducts,
                        products: filter
                    };
                });
            } else {
                let filter = this.getProducts.products.filter((item) => {
                    return item.cat_id === 12
                });

                this.newData = {
                    ...this.getProducts,
                    products: filter
                };
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