import NavBar from "../components/NavBar";

export default function MainLayout({ children, page }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
      <NavBar currentPage={page} />
      <main className="flex-1 container mx-auto mt-[63px]">{children}</main>
      <footer className="bg-gray-200 text-gray-600 dark:bg-black dark:text-gray-600 text-center py-[1px] mt-3">
        © 2025 Erick-Melo ltda
      </footer>
    </div>
  );
}
