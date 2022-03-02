import ViewWrapper from '../components/ViewWrapper';
import ProductList from '../components/ProductList';

function HomeView() {
    return (
        <>
            <ViewWrapper
                title={'Product List'}
                firstBtnName={'add'}
                secondBtnName={'mass delete'}
                firstBtnLink={'/add'}
                secondBtnLink={'#'}
            />
            <ProductList />
        </>
    );
}

export default HomeView;
