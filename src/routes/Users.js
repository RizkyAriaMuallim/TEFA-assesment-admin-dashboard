import DataUsers from "../Data/DataUsers";
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

    return (
        <>
            <h1>Halo, kamu sedang berada di page user!!!</h1>
            <DataTable Items={selectedDataUsers}/>
        </>
    )
}

export default User;