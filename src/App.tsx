import { LockIcon, Unlock } from "lucide-react";
import { Button } from "./components/ui/button";
import React from "react";
import toast from "react-hot-toast";
import Modal from "./components/modal";
import TextChangerForm from "./components/text-changer-form";
import BackgroundChangerForm from "./components/background-changer-form";
import { useAppStore } from "./lib/store";

function App() {
  const {
    backgroundColor,
    textColor,
    text,
    isBackgroundModalOpen,
    isLock,
    isTextModalOpen,
    setBackgroundColor,
    setIsBackgroundModalOpen,
    setIsLock,
    setIsTextModalOpen,
    setText,
    setTextColor,
  } = useAppStore();

  const styles = {
    "--text-color": textColor,
    "--background-color": backgroundColor,
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
  };

  return (
    <>
      <div
        style={styles}
        className="w-screen h-screen flex justify-center items-center relative"
        onClick={handleClickBackground}
      >
        <h1
          className="text-8xl  cursor-pointer text-center"
          onClick={handleClickText}
        >
          {text}
        </h1>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsLock(!isLock);
            toast.success(isLock ? "Desbloqueado" : "Bloqueado");
          }}
          className="absolute bottom-1 right-1"
        >
          {isLock ? <Unlock /> : <LockIcon />}
        </Button>
      </div>

      <div>
        <Modal
          title="Modificar texto"
          key="text-modal"
          isOpen={isTextModalOpen}
          setIsOpen={setIsTextModalOpen}
        >
          <TextChangerForm
            initialValue={{
              text,
              color: textColor,
            }}
            onSubmit={({ text, color }) => {
              setText(text);
              setTextColor(color);
              setIsTextModalOpen(false);
            }}
          />
        </Modal>

        <Modal
          title="Modificar Fondo"
          key="background-modal"
          isOpen={isBackgroundModalOpen}
          setIsOpen={setIsBackgroundModalOpen}
        >
          <BackgroundChangerForm
            initialValue={{
              color: textColor,
            }}
            onSubmit={({ color }) => {
              setBackgroundColor(color);
              setIsBackgroundModalOpen(false);
            }}
          />
        </Modal>
      </div>
    </>
  );

  function handleClickText(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    if (isLock) return;
    setIsTextModalOpen(true);
  }

  function handleClickBackground() {
    if (isLock) return;
    setIsBackgroundModalOpen(true);
  }
}

export default App;
