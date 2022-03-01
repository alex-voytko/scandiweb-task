import ViewWrapper from '../components/ViewWrapper';
// import { Link } from 'react-router-dom';

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
        </>
    );
}

export default HomeView;
