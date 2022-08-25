import { Route, Routes } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

// Handler for not found pages
const RoutesWrapper = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
};

export default RoutesWrapper;
