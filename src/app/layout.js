import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContainer from "@/components/layout/PageContainer";
export const metadata = {
  title: "Cadastro ViaCEP com Next.js",
  description: "Aula prática de Next.js com React Hooks e Tailwind CSS",
};
export default function RootLayout({ children }) {
 return (
  <html lang="pt-BR">
  <body className="min-h-screen bg-slate-100 text-slate-900">
  <Header />
  <PageContainer>
    {children}
  </PageContainer>
  <Footer />
  </body>
  </html>
 );
}