import NavbarCreatePost from "@/components/Navbar/NavbarCreatePost";

const Layout = ({ children }: { children: React.ReactNode } ) => {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <NavbarCreatePost />
      </div>
      <main className="w-full mx-auto flex-1">
        {children}
      </main>
    </div>
  )
};

export default Layout;