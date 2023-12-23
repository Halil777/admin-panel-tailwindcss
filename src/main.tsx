import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme/ThemeContext";
import Background from "./components/common/background/Background";
import "./components/language/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Background>
      <App />
    </Background>
  </ThemeProvider>
);
