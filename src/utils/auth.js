export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken"); // Returns true if token exists
};
