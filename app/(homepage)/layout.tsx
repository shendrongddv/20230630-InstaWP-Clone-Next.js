import FooterWrapper from "@/components/footer/footer-wrapper";
import HeaderWrapper from "@/components/header/header-wrapper";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default async function HomepageLayout({
  children,
}: HomepageLayoutProps) {
  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
      <FooterWrapper />
    </>
  );
}
