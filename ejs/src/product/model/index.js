class Product{

    constructor(data=[]){
        this.data =[{
            id:1,
            title:"Shoes",
            price:15,
            thumbnail:"https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1655416101~hmac=6f9d0ff34f714e19b1ea3ef5fb2d312a"
        }]
    }

    async save(product){
        try {
            const id = this.data.length+1
            const newProduct={}

            newProduct.id=id
            newProduct.title=product.title
            newProduct.price=product.price
            newProduct.thumbnail=product.thumbnail

            this.data.push(newProduct)

            return newProduct

        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try{
            return this.data
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports=Product