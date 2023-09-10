import React, { Suspense, lazy } from "react";

const LazyApp = lazy(() => import("./Pages/welcomePage/welcome.jsx"));
const LazyNotFound = lazy(() => import("./Pages/notFound/notFound.jsx"));
const LazyLogin = lazy(() => import("../src/Pages/login/logIn.jsx"));
const LazySignup = lazy(() => import("../src/Pages/signup/signup.jsx"));
const LazyMain = lazy(() =>
  import("./components/mainStructure/mainStructure.jsx")
);
const LazyShop = lazy(() => import("./Pages/shop/shop.jsx"));
const LazyProfile = lazy(() => import("./Pages/profile/profile.jsx"));
const LazyLikes = lazy(() => import("./Pages/likes/likes.jsx"));
const LazyCart = lazy(() => import("./Pages/cart/cart.jsx"));
const LazyCreate = lazy(() => import("./Pages/createPost/create.jsx"));
const LazyAboutUs = lazy(() => import("./Pages/aboutUs/aboutUs.jsx"));
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
        path: "aboutus",
        element: (
          <Suspense fallback="loading about us page...">
            <LazyAboutUs />{" "}
          </Suspense>
        ),
      },
      {
        path: "shop",
        element: (
          <Suspense fallback="loading store page...">
            <LazyShop />{" "}
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
