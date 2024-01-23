import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  let status = 404;
  let statusText = 'Page Not Found!';

  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    status = error.status;
    statusText = error.statusText;
  }

  return (
    <>
      <h1>{status}</h1>
      <p>{statusText}</p>
    </>
  );
}
