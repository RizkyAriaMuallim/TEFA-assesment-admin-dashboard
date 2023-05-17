import DataProduct from '../Data/DataProduct'
import DataTable from '../components/dataTable';

const Product = () => {
    const selectedProperties = ['name', 'description', 'price', 'category', 'expiryDate'];

    // Create a new array with selected properties
    const selectedProducts = DataProduct.map((product) => {
      const selectedProduct = {};
      selectedProperties.forEach((property) => {
        selectedProduct[property] = product[property];
      });
      return selectedProduct;
    });
    
    return (
        <>
            <h1 className='text-3xl font-bold underline'>Hello World!!!</h1>
            <DataTable Items={selectedProducts}/>

            
        </>
    )
}

export default Product;