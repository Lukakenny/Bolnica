import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';

import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import MojLayOut from '@/layouts/MojLayOut';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;

            case name.startsWith('auth/'):
                return AuthLayout;

            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];

            case name.startsWith('Doctor/'):
                return [MojLayOut];
            case name.startsWith('Patient/'):
                return [MojLayOut];

            default:
                return AppLayout;
        }
    },

    setup({ el, App, props }) {

        createRoot(el!).render(
            <TooltipProvider delayDuration={0}>
                <App {...props} />
                <Toaster />
            </TooltipProvider>,
        );
    },

    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
