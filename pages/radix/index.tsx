import { useTheme } from "next-themes";
import Head from "next/head";

import { globalStyles } from "../../Home.css";

import { Select } from "@components/radix/Select";

const Rows = ({ n = 10 }: { n?: number }) => {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <p key={i}>Your text</p>
      ))}
    </>
  );
};

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
        <h1 className="text-3xl font-bold underline">Radix demo</h1>

        <Rows n={10} />

        <Select defaultValue="blueberry" open>
          <Select.Trigger ariaLabel="Food" />
          <Select.Content>
            <Select.Group>
              {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
                (fruit, i) => (
                  <Select.Item
                    disabled={fruit === "Grapes"}
                    key={`${fruit}-${i}`}
                    value={fruit.toLowerCase()}
                  >
                    {fruit}
                  </Select.Item>
                )
              )}
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              {["A", "B", "C", "D", "E"].map((letter, i) => (
                <Select.Item
                  disabled={letter === "E"}
                  key={`${letter}-${i}`}
                  value={letter.toLowerCase()}
                >
                  {letter}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select>

        <div>
          Theme:
          <select
            className="mt-10"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </main>
    </div>
  );
}
