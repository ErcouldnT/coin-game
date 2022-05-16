export const post = async ({ request }) => {
  const URL = import.meta.env.DEV 
    ? 'http://localhost:3001/api/v1/user/exchange'
    : '/api/v1/user/exchange';
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: request.body,
    credentials: 'include'
  });

  const body = await res.json();

  if (res.status === 200) {
    return {
      status: 200,
      body
    };
  };

  return {
    status: 401,
    body
  };
};

