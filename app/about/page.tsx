import { redirect } from 'next/navigation';

export default function AboutPage() {
  // 301 Permanent redirect to home page
  redirect('/');
}
