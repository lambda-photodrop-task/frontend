export const getToken = (token: 'refreshToken') => {
  const tokens = localStorage.getItem('tokens');

  if (tokens) {
    const json = JSON.parse(tokens);
    return json.state[token];
  }
  return '';
};
