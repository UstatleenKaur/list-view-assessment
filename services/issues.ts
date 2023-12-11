// This call fetches the issue from a network call
export const getIssues = (pageNumber: number = 1) => {
  return fetch(`https://sfe-interview.hoppscotch.com/issues-${pageNumber}.json`)
    .then(response => {
      return response.json();
    });
};