import { TriangleAlert } from 'lucide-react';
import BaseCard from '../grid/BaseCard';

function ErrorCard({ error }) {
  return (
    <BaseCard className="px-4 py-3">
      <span className="font-bold text-red-400 flex gap-1 items-center mb-1">
        <TriangleAlert /> Oops!
      </span>
      <span className="text-sm">{error.message}</span>
    </BaseCard>
  );
}

export default ErrorCard;
