export default function filmScheme(name, duration, id) {
  const div = document.createElement('div');
  div.id = id+'ff';
  div.className = 'fantom';
  div.style.width = duration+'px';
  const nameF = document.createElement('p');
  nameF.textContent = name;
  div.append(nameF);
  return div;
}