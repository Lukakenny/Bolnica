import { Head } from '@inertiajs/react';
import DoctorCard from '@/components/DoctorCard';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

export interface Doctor {
    id: number;
    user_id: number;
    specialization: string;
    license_number: string;
    bio: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
interface props{
    doctors: Doctor[];
}

export default function Dashboard({doctors}:props) {
    console.log('Moji doktori:', doctors);
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <h2 className="text-6xl font-bold text-neutral-900 dark:text-neutral-100">
                            {doctors.length}
                        </h2>
                        <p className="mt-2 text-lg font-medium text-neutral-500 dark:text-neutral-400">
                            Ukupan broj doktora
                        </p>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-screen flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    {doctors.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
