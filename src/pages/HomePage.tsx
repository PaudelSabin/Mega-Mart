import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import { logo-blue } from "../assets";

function HomePage() {
  return (
    <>
      <TopBar welcomeText="Welcome to worldwide Megamart!" />
      <Header
        logo={logoBlue}
        searchPlaceholder="Search essentials, groceries and more..."
      />
      <main></main>
    </>
  );
}

export default HomePage;