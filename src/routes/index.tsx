import { lazy, LazyExoticComponent, ReactElement, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() =>
  import("../pages/Home").then((p) => ({ default: p.default }))
);

const AppRoute = ({
  component: Component,
}: {
  component: LazyExoticComponent<() => JSX.Element>;
}): ReactElement => {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppRoute component={Home} />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};
