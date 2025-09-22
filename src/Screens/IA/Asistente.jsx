import React, { useState, useRef } from 'react';

// Componente principal: Asistente
// - Diseñado para integrarse fácilmente en un proyecto React + Tailwind (no necesita librerías extra)
// - Área de mensajes, burbujas para usuario/IA, textarea para input, botones de envío y opciones básicas
// - Comentarios muestran dónde conectar la API (OpenAI, Firebase, etc.)

export default function Asistente() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: '¡Hola! Soy tu asistente. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);

  // Auto-scroll hacia el final
  const scrollToBottom = () => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  };

  // Simula una respuesta de IA (reemplaza con llamada real a API)
  const mockAIResponse = (userText) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Respuesta simulada a: "${userText}"`);
      }, 700);
    });
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    // Aquí es donde deberías llamar a tu backend / OpenAI
    // Ejemplo: fetch('/api/chat', { method: 'POST', body: JSON.stringify({ prompt: trimmed }) })
    // y luego usar la respuesta real para crear la burbuja assistantMsg

    try {
      const aiText = await mockAIResponse(trimmed);
      const assistantMsg = { id: Date.now() + 1, role: 'assistant', text: aiText };
      setMessages((m) => [...m, assistantMsg]);
      setLoading(false);
      setTimeout(scrollToBottom, 50);
    } catch (err) {
      setLoading(false);
      setMessages((m) => [...m, { id: Date.now() + 2, role: 'assistant', text: 'Error: no se pudo obtener respuesta.' }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{ id: 1, role: 'assistant', text: '¡Hola! Soy tu asistente. ¿En qué puedo ayudarte hoy?' }]);
  };

  return (
    <div className="max-w-3xl mx-auto h-screen p-4 flex flex-col gap-4 bg-gradient-to-b from-gray-50 to-white">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Asistente IA</h1>
          <p className="text-sm text-gray-500">Interfaz simple lista para conectar con tu IA</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={clearChat}
            className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100"
            title="Limpiar conversación"
          >
            Limpiar
          </button>
        </div>
      </header>

      <main className="flex-1 rounded-lg border overflow-hidden bg-white shadow-sm flex flex-col">
        <div ref={messagesRef} className="flex-1 p-4 overflow-auto space-y-3" style={{ minHeight: 0 }}>
          {messages.map((m) => (
            <div key={m.id} className={`max-w-[85%] break-words ${m.role === 'user' ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
              <div className={`inline-block px-4 py-2 rounded-2xl ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                {m.text}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {m.role === 'user' ? 'Tú' : 'Asistente'}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
              <div className="text-sm text-gray-500">La IA está escribiendo...</div>
            </div>
          )}
        </div>

        <div className="border-t p-3 bg-white">
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje aquí... (Enter para enviar, Shift+Enter para nueva línea)"
              className="flex-1 min-h-[44px] max-h-36 resize-none rounded-md border px-3 py-2 focus:outline-none"
            />

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading}
                className="px-4 py-2 rounded-md bg-blue-600 text-white disabled:opacity-50"
              >
                Enviar
              </button>

              <button
                type="button"
                onClick={() => { setInput('¿Puedes explicarme paso a paso?'); }}
                className="px-3 py-1 rounded-md border text-sm hover:bg-gray-50"
                title="Prompt sugerido"
              >
                Prompt
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="text-xs text-gray-500 text-center">
        Diseñado para integrarse con OpenAI o tu propio backend. Reemplaza <code>mockAIResponse</code> por tu llamada real.
      </footer>
    </div>
  );
}
