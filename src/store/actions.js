let apiUrl = '';

if(process.env.VUE_APP_API_ROOT) {
    let url = new URL(process.env.VUE_APP_API_ROOT);
    apiUrl = url.origin + url.pathname.replace('/', '');
}

export default {
    categories(context) {
        let ReqStatus = ''

        fetch(`${apiUrl}/categories`)
            .then(response => {
                ReqStatus = response.status;
                return response.json()
            })
            .then(result => {
                if (ReqStatus == 200) {
                    context.commit('updateCategories', result);
                } else {
                    context.commit('updateCategories', []);
                }

            })
            .catch(error => {
                console.log('error', error);
                context.commit('updateCategories', []);
            });
    },
    products(context) {
        return new Promise((resolve, reject) => {
            let ReqStatus = ''

            fetch(`${apiUrl}/products`)
                .then(response => {
                    ReqStatus = response.status;
                    return response.json()
                })
                .then(result => {
                    if (ReqStatus == 200) {
                        resolve({
                            ...context.getters.getProducts,
                            products: result,
                            previous: result,
                            status: 'OK'
                        })
                        context.commit('updateProducts', {
                            ...context.getters.getProducts,
                            products: result,
                            previous: result,
                            status: 'OK'
                        });
                    } else {
                        context.commit('updateProducts', {
                            ...context.getters.getProducts,
                            products: [],
                            previous: [],
                            status: 'PENDING'
                        });
                    }

                })
                .catch(error => {
                    reject({
                        ...context.getters.getProducts,
                        products: [],
                        previous: [],
                        status: 'ERROR'
                    })
                    console.log('error', error);
                    context.commit('updateProducts', {
                        ...context.getters.getProducts,
                        products: [],
                        previous: [],
                        status: 'ERROR'
                    });
                });
        });
    },
    opportunity(context) {
        let ReqStatus = ''

        fetch(`${apiUrl}/opportunity`)
            .then(response => {
                ReqStatus = response.status;
                return response.json()
            })
            .then(result => {
                if (ReqStatus == 200) {
                    context.commit('updateOpportunity', result);
                } else {
                    context.commit('updateOpportunity', []);
                }

            })
            .catch(error => {
                console.log('error', error);
                context.commit('updateOpportunity', []);
            });
    }
}