import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, LayoutNavLink } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <LayoutNavLink to="/">Home</LayoutNavLink>
          <LayoutNavLink to="/movies">Movies</LayoutNavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
