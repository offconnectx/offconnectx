
import Image from "next/image";
import { SidebarProvider } from "../context/SidebarContext"
// import './App.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <SidebarProvider>
      <main className="flex h-screen w-full font-inter">
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.png" width={30} height={30} alt="logo" />
            <div>

            </div>
          </div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}


