import { BottomNav, Header } from "@/components/app";

import { ModalContainer } from "@/components/modals";

const AppPage = () => {
  return (
    <main class="h-screen">
      <Header />
      <BottomNav />

      <ModalContainer />
    </main>
  );
};
export default AppPage;
