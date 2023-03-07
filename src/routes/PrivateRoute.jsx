import LoginPage from "../pages/LoginPage";

export default function PrivateRoute({ children }) {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  if (token) {
    return children;
  } else {
    return <LoginPage />;
  }
}
