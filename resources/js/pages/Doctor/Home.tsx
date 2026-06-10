import { Head } from '@inertiajs/react';

interface AppointmentUser {
    id: number;
    name: string;
    email: string;
}

interface Patient {
    id: number;
    user: AppointmentUser | null;
}

interface Appointment {
    id: number;
    doctor_id: number;
    patient_id: number;
    appointment_date: string;
    reason: string;
    patient?: Patient | null;
}

interface Props {
    appointments: Appointment[];
}

function formatDateTime(value: string): string {
    const date = new Date(value.replace(' ', 'T'));

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleString('sr-RS', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

export default function Home({ appointments }: Props) {
    return (
        <div className="min-h-screen bg-neutral-100 p-6 md:p-12">
            <Head title="Moji termini" />

            <div className="mx-auto max-w-3xl">
                <h1 className="mb-1 text-2xl font-bold text-neutral-900">
                    Moji termini
                </h1>
                <p className="mb-8 text-neutral-600">
                    Pregled zakazanih termina za prijavljenog doktora.
                </p>

                {appointments.length === 0 ? (
                    <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center text-neutral-500">
                        Trenutno nemate zakazanih termina.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {appointments.map((appointment) => (
                            <div
                                key={appointment.id}
                                className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-neutral-900">
                                            {appointment.patient?.user?.name ??
                                                'Nepoznat pacijent'}
                                        </p>
                                        <p className="mt-1 text-sm text-neutral-600">
                                            {appointment.reason}
                                        </p>
                                    </div>
                                    <span className="shrink-0 rounded-lg bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                                        {formatDateTime(
                                            appointment.appointment_date,
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
