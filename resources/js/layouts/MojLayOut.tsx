import { Link, usePage } from '@inertiajs/react';

export default function MojLayOut({ children }:{children:any}) {
    const { auth } = usePage().props;
    const user = auth?.user;
    console.log(children)

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            {/* NAVBAR */}
            <nav className="flex w-full items-center justify-between bg-white px-6 py-4 shadow">
                <div className="text-lg font-semibold">
                    Dobar dan, {user?.name}
                </div>

                <div className="flex gap-4 text-sm text-gray-600">
                    <Link href="/">Home</Link>
                    <Link href="/dashboard">Dashboard</Link>
                </div>
            </nav>

            {/* CONTENT */}
            <main className="flex-1 px-6 py-6">{children}</main>

            {/* FOOTER */}
            <footer className="border-t bg-white py-4">
                <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
                    {/* naziv */}
                    <div className="font-medium">Moja Bolnica</div>

                    {/* ikone */}
                    <div className="flex gap-4 text-lg">
                        <a href="#">📸</a>
                        <a href="#">📘</a>
                    </div>

                    {/* copyright */}
                    <div className="text-xs">@copyluka</div>
                </div>
            </footer>
        </div>
    );
}
