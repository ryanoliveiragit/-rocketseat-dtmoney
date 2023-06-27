import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <>
      <GlobalStyle theme={defaultTheme} />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </>
  );
}
