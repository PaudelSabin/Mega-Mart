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
import type { UserData } from "./types/authTypes";

function App() {
  const [page, setPage] = useState<Page>("home");

  // Registered user data saved temporarily in state (until tab refresh)
  const [registeredUser, setRegisteredUser] = useState<UserData | null>(null);

  // Field values for each column saved in state
  const [signInValues, setSignInValues] = useState<Record<string, string>>({
    email: "",
    password: "",
  });
  const [signUpValues, setSignUpValues] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  // Change the page: this is all it takes
  const navigate = (next: Page) => setPage(next);

  // When sign up is submitted: save the data, prefill sign-in, and go home
  const handleSignUpSubmit = () => {
    setRegisteredUser({ ...signUpValues });
    setSignInValues({
      email: signUpValues.email || "",
      password: signUpValues.password || "",
    });
    setPage("home");
  };

  // When sign in is submitted: take to home page
  const handleSignInSubmit = () => {
    setPage("home");
  };

  // Display name in the header
  const userName = registeredUser?.firstName
    ? registeredUser.lastName
      ? `${registeredUser.firstName} ${registeredUser.lastName}`
      : registeredUser.firstName
    : undefined;

  return page === "signin" ? (
    <SignInPage
      onNavigate={navigate}
      userName={userName}
      signInValues={signInValues}
      signUpValues={signUpValues}
      onSignInChange={(id, value) =>
        setSignInValues((prev) => ({ ...prev, [id]: value }))
      }
      onSignUpChange={(id, value) =>
        setSignUpValues((prev) => ({ ...prev, [id]: value }))
      }
      onSignInSubmit={handleSignInSubmit}
      onSignUpSubmit={handleSignUpSubmit}
    />
  ) : (
    <HomePage onNavigate={navigate} userName={userName} />
  );
}

export default App;
