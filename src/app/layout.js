import './globals.css';
import { Inter } from 'next/font/google';
import { TaskProvider } from '@/context/TaskContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Task Management App',
  description: 'A simple task management application built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <TaskProvider>
          <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
              <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Task Management App
                </h1>
              </div>
            </header>
            <main className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}