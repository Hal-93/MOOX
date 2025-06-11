import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/auth/login.tsx"),
  route("logout", "routes/auth/logout.tsx"),
  layout("routes/courses/layout.tsx", [
    ...prefix("courses", [index("routes/courses/index.tsx")]),
  ]),
] satisfies RouteConfig;
