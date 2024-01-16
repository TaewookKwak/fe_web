import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

// layout 을 하나 더 두는 이유는, footer, header 를 페이지 별로 추가/삭제 가능하기에
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
