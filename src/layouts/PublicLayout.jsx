export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-200 text-center py-4">
        © 2025 Erick-Melo ltda
      </footer>
    </div>
  );
}
