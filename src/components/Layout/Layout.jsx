import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </Container>
  );
};
