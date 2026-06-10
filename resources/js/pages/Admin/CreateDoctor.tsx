
import { useForm, Head} from '@inertiajs/react';
import React from 'react';


export default function CreateDoctor() {
    const { data, setData, post, processing, errors ,reset} = useForm({
        name: '',
        email: '',
        password: '',
        specialization: '',
        license_number: '',
        bio: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/doctors', {
            onSuccess: () => reset(),
        });
    };

    // Stil za sve inpute da ne ponavljamo klase
    const inputClasses =
        'w-full px-4 py-2.5 bg-white border border-neutral-300 text-neutral-900 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all placeholder:text-neutral-400';
    const labelClasses = 'block text-sm font-semibold text-neutral-800 mb-1.5';

    return (
        <div className="min-h-screen bg-neutral-100 p-6 md:p-12">
            <Head title="Novi Doktor" />

            <div className="mx-auto max-w-2xl">
                <h1 className="mb-1 text-2xl font-bold text-neutral-900">
                    Registracija doktora
                </h1>
                <p className="mb-8 text-neutral-600">
                    Popunite podatke da dodate novog člana tima u sistem.
                </p>

                <form
                    onSubmit={submit}
                    className="space-y-6 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
                >
                    {/* Grid za strukturu */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <label className={labelClasses}>
                                Ime i prezime
                            </label>
                            <input
                                className={inputClasses}
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                placeholder="Dr. Marko Marković"
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className={labelClasses}>
                                Biografija (Bio)
                            </label>
                            <textarea
                                className={`${inputClasses} resize-none`}
                                rows={4}
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                                placeholder="Ukratko o iskustvu, obrazovanju i specijalizacijama..."
                            />
                            {errors.bio && (
                                <p className="mt-1 text-xs text-red-600">
                                    {errors.bio}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className={labelClasses}>Email adresa</label>
                            <input
                                type="email"
                                className={inputClasses}
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                placeholder="marko@ordinacija.rs"
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>Lozinka</label>
                            <input
                                type="password"
                                className={inputClasses}
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                placeholder="••••••••"
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>
                                Specijalizacija
                            </label>
                            <input
                                className={inputClasses}
                                value={data.specialization}
                                onChange={(e) =>
                                    setData('specialization', e.target.value)
                                }
                                placeholder="Kardiologija"
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>Broj licence</label>
                            <input
                                className={inputClasses}
                                value={data.license_number}
                                onChange={(e) =>
                                    setData('license_number', e.target.value)
                                }
                                placeholder="LIC-00000"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end border-t border-neutral-100 pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-neutral-900 px-6 py-2.5 font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
                        >
                            {processing ? 'Čuvanje...' : 'Potvrdi registraciju'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
