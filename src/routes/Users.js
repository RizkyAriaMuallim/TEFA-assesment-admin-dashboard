import DataUsers from "../Data/DataUsers";
import BasePage from "../components/BasePage";
import DataTable from "../components/dataTable";

const User = () => {
    const selectedProperties = ['username', 'email'];

    const selectedDataUsers = DataUsers.map((product) => {
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
            <DataTable Items={selectedDataUsers}/>
        </>
    )
}

export default User;