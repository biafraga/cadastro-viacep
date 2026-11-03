export default function PageContainer({ children }) {
 return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
    {children}
    </main>
 );
}