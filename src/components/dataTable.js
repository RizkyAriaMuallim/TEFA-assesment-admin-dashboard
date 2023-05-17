import PropTypes from 'prop-types';
// Items → Array of Object Items that has been process.
const DataTable = ({Items}) => {
    return (
        <>
            {Items.map((obj, index) => (
                <div key={index} className='columns-6 p-10 pb-7'>
                    <div className='flex flex-row'>
                        {Object.entries(obj).map(([key, value]) => {
                            return <div className='px-7'>{value}</div>
                        })}
                    </div>
                </div>
            ))}
        </>
    )
};

DataTable.propTypes = {
    Items: PropTypes.array,
}

export default DataTable;