import SimpleClientComponent from "@/components/SimpleClientComponent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Horizon Software Development
          <a className="text-purple-700" href="https://nextjs.org">
            {" "}
            Next.js{" "}
          </a>
          Template
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            app/page.tsx
          </code>
        </p>
        <SimpleClientComponent />
      </section>
    </main>
  );
}
