import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-8xl overflow-y-auto h-screen">
      <MainHeader />
      <div>{children}</div>
      <MainFooter />
    </div>
  );
};

export default Layout;