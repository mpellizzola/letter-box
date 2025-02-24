export default function Letter({
  letter,
  onToggle,
  isSelected,
}: {
  letter: { id: string; subject: string };
  onToggle: (id: string) => void;
  isSelected: boolean;
}) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}
