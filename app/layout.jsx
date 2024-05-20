import { Poppins as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/layout/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-sans",
})

export const metadata = {
  title: "adrianputra",
  description: "Cooking something epic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            enableSystem 
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
    </html>
  );
}
