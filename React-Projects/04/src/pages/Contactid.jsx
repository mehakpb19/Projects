import { useParams } from 'react-router-dom';

const Contactid = () => {
    const params = useParams();
  return (
    <div>{params.id}</div>
  )
}

export default Contactid