import { useEffect } from "react";

import MainPage from "./pages/MainPage";

function App() {
  useEffect(() => {
    document.title = "Island — Discover Your Paradise";

    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href =
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW5kfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000";
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
