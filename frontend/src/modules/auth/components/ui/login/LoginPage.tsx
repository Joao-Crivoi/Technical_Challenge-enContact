import { Controls } from '@/components/ui';
import { LoginBranding } from './LoginBranding';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <main className="flex min-h-screen animate-fade-in">
      <section className="hidden lg:flex lg:w-1/2 animated-gradient rounded-e-xl">
        <LoginBranding />
      </section>
      <section className="relative flex w-full lg:w-1/2 items-center justify-center p-8 bg-surface">
        <div className="absolute top-4 right-4">
          <Controls />
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
