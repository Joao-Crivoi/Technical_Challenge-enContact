import { LoginBranding } from './LoginBranding';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <main className="flex min-h-screen animate-fade-in">
      <section className="hidden lg:flex lg:w-1/2 animated-gradient rounded-e-xl">
        <LoginBranding />
      </section>
      <section className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-cream">
        <LoginForm />
      </section>
    </main>
  );
}
