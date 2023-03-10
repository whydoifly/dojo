import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import ProjectSummary from './ProjectSummary';

// styles
import './Project.css';
import ProjectComments from './ProjectComments';

export default function Project() {
  const { id } = useParams();
  const { error, document } = useDocument('projects', id);

  if (error) return <p className='error'>{error}</p>;

  if (!document) return <p>Loading...</p>;
  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
