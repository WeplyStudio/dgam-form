'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, MessageCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh bg-background p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md text-center">
        <div className="bg-card p-10 rounded-3xl shadow-soft border border-gray-100">
            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground mb-2">
                Pendaftaran Berhasil!
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
                Terima kasih telah mendaftar. Datamu telah kami terima dan akan segera kami proses. Silakan bergabung ke grup WhatsApp untuk informasi selanjutnya.
            </p>
            <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-full">
                <Link href="https://chat.whatsapp.com/FALmP61zCv5IRcarGPsxyx" target="_blank">
                    <MessageCircle className="mr-2" /> Gabung Grup WhatsApp
                </Link>
            </Button>
            <div className="mt-6">
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/">
                        <Home className="mr-2" />
                        Kembali ke Halaman Utama
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </main>
  );
}
