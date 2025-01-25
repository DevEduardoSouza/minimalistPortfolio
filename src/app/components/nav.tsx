import Link from "next/link";

// Defina as props do componente
interface NavProps {
  isActiveName: boolean;
}

export function Nav({ isActiveName }: NavProps) {
  return (
    <nav className="flex items-center justify-between px-8 py-6 z-10">
      <div className="flex space-x-8">
        <Link
          href="/portfolio"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Portfólio
        </Link>
        <Link
          href="/"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Sobre
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-20 sm:top-5 md:top-50">
        <Link href="/" className="text-white font-bold text-xl">
          {isActiveName ? "Eduardo Souza" : ""}
        </Link>
      </div>

      <div className="flex space-x-8">
        <Link
          href="/contato"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Contatos
        </Link>
      </div>
    </nav>
  );
}
