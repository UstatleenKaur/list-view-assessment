export const getIssues = (pageNumber: number = 1) => {
  return fetch(`/api/issues?pageNumber=${pageNumber}`, {
    headers: {
      "Content-type": "application/json"
    }
  }).then(res => res.json());
};