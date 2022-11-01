import Header from './header';
import Footer from './footer';

type Props = { children: React.ReactNode };
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
