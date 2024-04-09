import { Kanban } from '../components';
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-neutral-900 text-neutral-50 flex justify-center items-center">
      <Kanban className='h-screen' />
    </main>
  );
}
