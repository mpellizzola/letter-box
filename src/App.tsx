import { useState } from 'react';
import { letters } from './data.jsx';
import Letter from './Letter.tsx';
import React from 'react';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState(null);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setSelectedId(toggledId);
  }

  return (
    <>
      <h2>Instructions</h2>
      <ul>
        <li>
          Modifica il funzionamento di questa checkbox per rendere più di una
          lettera selezionabile
        </li>
        <li>
          aggiorna dinamicamente il contatore delle lettere selezionate,
          verificando che anche deselezionando una lettera il contatore si
          aggiorni correttamente
        </li>
      </ul>
      <hr />
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.id === selectedId
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
