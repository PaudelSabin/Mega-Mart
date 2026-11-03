/**
 * App  (root component)
 * ---------------------
 * The site has two pages: the home page and the Sign in page.
 *
 * Which one is showing is kept in STATE (useState): "page" is either "home" or
 * "signin". Both pages receive the function "navigate", which they hand to the
 * Header (logo, "Sign Up/Sign In") and the Breadcrumb ("Home"). Calling
 * navigate("signin") changes the state, React draws the page again, and the
 * Sign in page appears. No router, no URL changes, no effects, no browser calls:
 * just state.
 *
 * (If the site grows, this is the place to swap in a real router.)
 */
import { useState } from "react";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import type { Page } from "./types/pageTypes";

function App() {
  const [page, setPage] = useState<Page>("home");

  // Change the page: this is all it takes
  const navigate = (next: Page) => setPage(next);

  return page === "signin" ? (
    <SignInPage onNavigate={navigate} />
  ) : (
    <HomePage onNavigate={navigate} />
  );
}

export default App;
