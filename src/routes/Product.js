import DataProduct from '../Data/DataProduct'
import BasePage from '../components/BasePage';
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
    // still in progress :/
    return (
      <>
        <BasePage />
        <DataTable Items={selectedProducts}/>
      </>
    )
}




export default Product;