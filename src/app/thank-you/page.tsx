'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/icons';

export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh bg-background p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md text-center">
        <div className="bg-card p-10 rounded-3xl shadow-soft border">
            <div className="mx-auto mb-6 flex justify-center">
                <Logo className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-3xl font-extrabold text-primary mb-2">
                Pendaftaran Berhasil!
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
                Terima kasih telah mendaftar. Datamu telah kami terima dan akan segera kami proses. Silakan bergabung ke grup WhatsApp untuk informasi selanjutnya.
            </p>
            <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base">
                <Link href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK_HERE" target="_blank">
                    <MessageCircle className="mr-2" /> Gabung Grup WhatsApp
                </Link>
            </Button>
            <div className="mt-6">
                <Button asChild variant="outline">
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
