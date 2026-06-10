import React from 'react';
import { router } from '@inertiajs/react';

// Ako koristiš TypeScript, ostavi ovaj interfejs.
// U suprotnom, možeš ga obrisati.
export interface Doctor {
    id: number;
    specialization: string;
    license_number: string;
    bio: string | null;
    is_active: boolean;
    // Pretpostavka je da ćeš kasnije iz baze povući i ime preko relacije sa User modelom
    user?: {
        name: string;
    };
}

export default function DoctorCard({ doctor }: { doctor: Doctor }) {

    const handleDelete = () => {
        // Kasnije ovde dodajemo modal za potvrdu
        if (confirm('Da li ste sigurni da želite da obrišete ovog doktora?')) {
            router.delete(`/doctors/${doctor.id}`);
        }
    };


    return (
        <div className="flex flex-col gap-3 rounded-xl border border-sidebar-border/70 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-sidebar-border dark:bg-neutral-900">
            {/* Header kartice: Ime i Status */}
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        {doctor.user?.name || `Doktor #${doctor.id}`}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {doctor.specialization}
                    </p>
                </div>

                {/* Bedž za status */}
                <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        doctor.is_active
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                >
                    {doctor.is_active ? 'Aktivan' : 'Neaktivan'}
                </span>
            </div>

            {/* Kratak opis (Bio) */}
            <div className="flex-1">
                <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
                    {doctor.bio ? doctor.bio : 'Ovaj doktor nema unet opis.'}
                </p>
            </div>

            {/* Footer kartice: Broj licence */}
            <div className="mt-2 border-t border-sidebar-border/70 pt-3 dark:border-sidebar-border">
                <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="mr-1 font-semibold text-neutral-700 dark:text-neutral-300">
                        Licenca:
                    </span>
                    {doctor.license_number}
                </div>
                <button
                      onClick={handleDelete}
                    className="text-xs font-semibold text-red-600 transition-colors hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                    Obriši
                </button>
            </div>
        </div>
    );
}
