import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold text-white">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-white px-6 py-3 text-lg hover:underline"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
