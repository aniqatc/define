import { TriangleAlert } from 'lucide-react';
import BaseCard from '../grid/BaseCard';

function ErrorCard({ error }) {
  return (
    <BaseCard className="mt-1 px-4 py-3">
      <div className="font-bold text-red-400 flex gap-1 items-center mb-1">
        <TriangleAlert /> Oops!
      </div>
      <div className="text-sm">
        {error.code ? <span className="font-semibold">{error.code}: </span> : ''}
        {error.message}
      </div>
    </BaseCard>
  );
}

export default ErrorCard;
