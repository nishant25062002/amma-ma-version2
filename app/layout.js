import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "sonner";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import { WhatsAppFloatingButton } from "@/components";

export const metadata = {
  title: "Amma-ma foods",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WhatsAppFloatingButton />
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
