import ViewWrapper from '../components/ViewWrapper';

function AddProductView() {
    return (
        <>
            <ViewWrapper
                title={'Add Product'}
                firstBtnName={'save'}
                secondBtnName={'cancel'}
                firstBtnLink={'#'}
                secondBtnLink={'/'}
            />
        </>
    );
}

export default AddProductView;
