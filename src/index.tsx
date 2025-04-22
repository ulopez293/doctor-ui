import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("No se encontró el elemento con el ID 'app' en el DOM.");
  // Aquí podrías implementar una lógica de fallback o manejo de errores,
  // como mostrar un mensaje al usuario o intentar renderizar en otro lugar.
}