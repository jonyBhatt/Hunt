export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/mentor-dashboard", "/user-dashboard"],
};
