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
  metadataBase: new URL('https://adrianputra.pw'),
  alternate: {
    canonical: '/'
  },
  authors: [{ name: 'Adrian', url: 'https://adrianputra.pw' }],
  keywords: ['nextjs', 'next', 'react', 'portofolio', 'adrianputra', 'aesampah', 'aesa'],
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "adrianputra",
  description: "Cooking something epic",
  openGraph: {
    images: '/images/profileadrianputra-_400x400.jpg'
  },
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
