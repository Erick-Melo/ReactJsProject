export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
      {children}
    </div>
  );
}
