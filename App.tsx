import React, { useState, useEffect } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">¡Tu App ERP SaaS está Lista!</h1>
      <p className="text-lg text-slate-300 max-w-md mb-6">
        El despliegue en Vercel y GitHub ha sido exitoso. Tu infraestructura ya está conectada y lista para recibir clientes.
      </p>
      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-sm text-slate-400">
        Estado: <span className="text-emerald-400 font-semibold">Conectado a la nube</span>
      </div>
    </div>
  );
}
