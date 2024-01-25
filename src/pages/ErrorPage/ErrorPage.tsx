import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router-dom';

import { Button } from '../../components';

export default function ErrorPage() {
  let status = 404;
  let statusText = 'Page Not Found!';

  const navigate = useNavigate();

  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    status = error.status;
    statusText = error.statusText;
  }

  return (
    <>
      <h1>{status}</h1>
      <p>{statusText}</p>
      <Button
        action={() => navigate('/')}
        size='MEDIUM'
        text='Home Page'
        primary
      />
    </>
  );
}
