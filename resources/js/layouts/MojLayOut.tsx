import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function Layout({ children }:{ children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            {/* --- NAVBAR --- */}
            <nav className="bg-emerald-600 text-white shadow-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo aplikacije */}
                        <div className="text-2xl font-bold tracking-wider">
                            <Link href="/">M-Klinika</Link>
                        </div>

                        {/* Navigacioni linkovi (Tekstualni, bez dugmića za čistiji izgled) */}
                        <div className="hidden space-x-8 font-medium md:flex">
                            <Link
                                href="/pocetna"
                                className="transition-colors hover:text-emerald-200"
                            >
                                Početna
                            </Link>
                            <Link
                                href="/pregledi"
                                className="transition-colors hover:text-emerald-200"
                            >
                                Pregledi
                            </Link>
                            <Link
                                href="/pacijenti"
                                className="transition-colors hover:text-emerald-200"
                            >
                                Pacijenti
                            </Link>
                        </div>

                        {/* Odjava korisnika */}
                        <div>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="font-medium transition-colors hover:text-emerald-200"
                            >
                                Odjava
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- GLAVNI SADRŽAJ --- */}
            {/* flex-grow osigurava da ovaj deo popuni prazan prostor i gurne footer na dno */}
            <main className="mx-auto w-full max-w-7xl grow px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>

            {/* --- FOOTER --- */}
            <footer className="border-t border-gray-200 bg-white py-6 text-emerald-800">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Start: Logo */}
                    <div className="text-lg font-bold">M-Klinika Logo</div>

                    {/* Centar: Drustvene mreze */}
                    <div className="flex space-x-6 font-medium">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-emerald-500"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-emerald-500"
                        >
                            Facebook
                        </a>
                    </div>

                    {/* Kraj: Copyright */}
                    <div className="text-sm font-semibold tracking-wide text-emerald-600">
                        &copy; 2026 Luka
                    </div>
                </div>
            </footer>
        </div>
    );
}
