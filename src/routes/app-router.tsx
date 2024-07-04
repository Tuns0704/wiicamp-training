import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routes from '@/constants/app-routes';
import AppContainer from '@/container/app-container';
import NotFound from '@/features/404-not-found-page';
import Loading from '@/components/loading';

function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen">
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<AppContainer />}>
          {routes.map((item) => (
            <>
              {item.children ? (
                <Route key={item.path} path={item.path} element={item.element}>
                  {item.children.map((child) => (
                    <Route
                      key={child.path}
                      path={child.path}
                      element={child.element}
                    />
                  ))}
                </Route>
              ) : (
                <Route
                  key={item.name}
                  path={item.path}
                  element={item.element}
                />
              )}
            </>
          ))}
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
