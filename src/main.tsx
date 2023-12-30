import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { ThemeProvider } from "./components/common/theme/ThemeContext.tsx";
import Background from "./components/common/background/Background";
import "./components/language/i18n.ts";
import RouteList from "./components/common/routes/RouteList.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Background>
      <RouteList />
    </Background>
  </ThemeProvider>
);
