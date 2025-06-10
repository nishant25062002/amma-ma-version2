import ReduxProvider from "@/providers/ReduxProvider";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

export const metadata = {
  title: "Amma-ma foods",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
