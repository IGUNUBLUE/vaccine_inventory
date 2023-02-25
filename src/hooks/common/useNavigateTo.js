import { useNavigate } from 'react-router-dom';

export default function useNavigateTo() {
  const navigate = useNavigate();

  function navigateTo({ path }) {
    navigate(path);
  }

  return { navigateTo };
}
