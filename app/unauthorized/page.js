'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UnauthorizedPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center pt-12 pb-10">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Brak uprawnień</h1>
        <p className="text-gray-600 mb-4">
          Nie masz dostępu do tej strony. Nastąpi przekierowanie na stronę główną...
        </p>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto"></div>
      </div>
    </main>
  );
};

export default UnauthorizedPage;