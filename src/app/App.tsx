import { HomeSection } from "./shared/components";
import { GlobalStyle } from "./shared/global/styles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <HomeSection />
      </main>
    </>
  );
}
