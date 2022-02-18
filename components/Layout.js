import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
      <style jsx>{``}</style>
    </>
  );
}
