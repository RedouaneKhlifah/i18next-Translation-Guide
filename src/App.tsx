import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <p>{t("paragraph")}</p>
      <header className="App-header">
        <button className="btn" onClick={() => changeLanguage("en")}>
          english
        </button>
        <button className="btn" onClick={() => changeLanguage("fr")}>
          french
        </button>
        <button className="btn" onClick={() => changeLanguage("ts")}>
          fall back to english
        </button>
      </header>
    </div>
  );
}

export default App;
