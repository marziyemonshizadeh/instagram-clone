import React, { Suspense, lazy } from "react";

const LazyApp = lazy(() => import("./Pages/welcomePage/welcome.jsx"));
const LazyNotFound = lazy(() => import("./Pages/notFound/notFound.jsx"));
const LazyLogin = lazy(() => import("../src/Pages/login/logIn.jsx"));
const LazySignup = lazy(() => import("../src/Pages/signup/signup.jsx"));
const LazyMain = lazy(() =>
  import("./components/mainStructure/mainStructure.jsx")
);
const LazyStore = lazy(() => import("./Pages/store/store.jsx"));
const LazyProfile = lazy(() => import("./Pages/profile/profile.jsx"));
const LazyLikes = lazy(() => import("./Pages/likes/likes.jsx"));
const LazyCart = lazy(() => import("./Pages/cart/cart.jsx"));
const LazyCreate = lazy(() => import("./Pages/createPost/create.jsx"));
const LazyAboutMe = lazy(() => import("./Pages/aboutme/aboutMe"));
const LazyHome = lazy(() => import("./Pages/homepage/home.jsx"));

let routes = [
  {
    path: "/",
    element: (
      <Suspense fallback="loading...">
        <LazyApp />{" "}
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback="loading login page...">
        <LazyLogin />{" "}
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback="loading signup page...">
        <LazySignup />{" "}
      </Suspense>
    ),
  },
  {
    path: "/main",
    element: (
      <Suspense fallback="loading...">
        <LazyMain />{" "}
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading home page...">
            <LazyHome />{" "}
          </Suspense>
        ),
      },
      {
        path: "aboutme",
        element: (
          <Suspense fallback="loading about me page...">
            <LazyAboutMe />{" "}
          </Suspense>
        ),
      },
      {
        path: "store",
        element: (
          <Suspense fallback="loading store page...">
            <LazyStore />{" "}
          </Suspense>
        ),
      },
      {
        path: "create",
        element: (
          <Suspense fallback="loading create page...">
            <LazyCreate />{" "}
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback="loading cart page...">
            <LazyCart />{" "}
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback="loading profile page...">
            <LazyProfile />{" "}
          </Suspense>
        ),
      },
      {
        path: "likes",
        element: (
          <Suspense fallback="loading likes page...">
            <LazyLikes />{" "}
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyNotFound />{" "}
      </Suspense>
    ),
  },
];

export default routes;

{
  /* <Routes>
  <Route
    path="/"
    element={
      <Suspense fallback="loading...">
        <LazyApp />
      </Suspense>
    }
  />
  <Route
    path="/login"
    element={
      <Suspense fallback="loading login page...">
        <LazyLogin />
      </Suspense>
    }
  />
  <Route
    path="/signup"
    element={
      <Suspense fallback="loading signup page...">
        <LazySignup />
      </Suspense>
    }
  />
  <Route
    path="/main"
    element={
      <Suspense fallback="loading main page...">
        <LazyMain />
      </Suspense>
    }
  >
    <Route
      index
      element={
        <Suspense fallback="loading home page...">
          <LazyHome />
        </Suspense>
      }
    />
    <Route
      path="aboutme"
      element={
        <Suspense fallback="loading about me page...">
          <LazyAboutMe />
        </Suspense>
      }
    />
    <Route
      path="store"
      element={
        <Suspense fallback="loading store page...">
          <LazyStore />
        </Suspense>
      }
    />
    <Route
      path="create"
      element={
        <Suspense fallback="loading create post page...">
          <LazyCreate />
        </Suspense>
      }
    />
    <Route
      path="cart"
      element={
        <Suspense fallback="loading cart page...">
          <LazyCart />
        </Suspense>
      }
    />
    <Route
      path="profile"
      element={
        <Suspense fallback="loading profile page...">
          <LazyProfile />
        </Suspense>
      }
    />
    <Route
      path="likes"
      element={
        <Suspense fallback="loading likes page...">
          <LazyLikes />
        </Suspense>
      }
    />
  </Route>
  <Route
    path="*"
    element={
      <Suspense fallback="loading likes page...">
        <LazyNotFound />
      </Suspense>
    }
  />
</Routes>; */
}
