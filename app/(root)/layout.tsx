import Navbar from "../components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="font-work-sans">
      <Navbar />
      <main>{children}</main>
    </section>
  );
};

export default layout;
