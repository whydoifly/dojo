import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';

// styles 
import './Project.css';

export default function Project() {
  const { id } = useParams();
  const { error, document } = useDocument('projects', id);

  if (error) return <p className='error'>{error}</p>;

  if (!document) return <p>Loading...</p>;
  return (
    <div className='project-details'>
      <h1>{document.name}</h1>
    </div>
  )
}
