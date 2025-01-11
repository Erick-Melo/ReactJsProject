import NavBar from "../components/NavBar/NavBar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
      <NavBar currentPage={"Início"} />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-200 text-gray-600 dark:bg-black dark:text-gray-600 text-center py-[1px]">
        © 2025 Erick-Melo ltda
      </footer>
    </div>
  );
}
