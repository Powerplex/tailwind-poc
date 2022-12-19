import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import { globalStyles } from "../Home.css";

import { Card } from "@components/Card";
import { Popover } from "@components/Popover";
import { Box } from "@components/Box";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={globalStyles}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="#app">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <Card />

        <Card
          sx={{
            display: "flex",
            padding: "large",

            // Conditional sprinkles:
            flexDirection: {
              mobile: "column",
              desktop: "row",
            },
          }}
        />

        <Card
          sx={{
            display: "flex",
            padding: "medium",
          }}
        />

        <Box
          sx={{
            padding: "large",
            marginTop: "large",
            marginBottom: "medium",
            bg: "textDimmed",
            color: {
              mobile: "primary",
              desktop: "textNormal",
              tabletHover: "textNormal",
            },
          }}
        />

        <Popover />

        {Array.from({ length: 100 }, (_, i) => (
          <p key={i}>Your text</p>
        ))}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
