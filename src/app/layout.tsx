import type { Metadata } from "next";
import "../styles/global.css";
import "../styles/typography.css";

export const metadata: Metadata = {
    title: "Chris Gorrod - Software Engineer",
    description: "Personal website of Chris Gorrod, a software engineer.",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="container">{children}</div>
            </body>
        </html>
    );
}
