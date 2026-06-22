import "./globals.css";

export const metadata = {
  title: "Cyber Security Company | Managed Security Services | St. Fox",
  description: "St. Fox is an AI-first cybersecurity company specializing in AI governance, threat defense, and IAM. Secure your cloud, AI, and digital ecosystem.",
  keywords: "cloud security services,cyber security company india,cyber security in usa,cyber security company pune,enterprise cyber security solutions,cyber security company,cyber security firms,cybersecurity in companies",
  icons: {
    icon: [
      { url: "/images/stfox-favicon.png" },
      { url: "/favicon.ico?603d046c9a6fdfbb" }
    ],
    apple: "/images/stfox-favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" style={{ colorScheme: 'light' }}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
