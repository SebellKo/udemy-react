import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;
