import Header from "./Header";
import Footer from "./Footer";
import FloatingSidebar from "./FloatingSidebar";
import SchoolFooter from "./SchoolFooter";



const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
      <FloatingSidebar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <SchoolFooter />
      <Footer />
    </div>
  );
};

export default Layout;
