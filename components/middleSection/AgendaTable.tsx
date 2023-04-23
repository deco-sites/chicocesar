export interface AgendaItem {
  date: string;
  location: string;
  description: string;
}

function AgendaTable({ concert }: { concert: AgendaItem }) {
  const { date, location, description } = concert;

  return (
    <tr class="">
      <td class="w-1/4 font-bold">
        <a href="https://chicocesar.com.br/agenda/">
          <h5 class="mt-1 mb-1">{concert.date}</h5>
          <h5 class="mt-1 mb-1">{concert.location}</h5>
        </a>
      </td>
      <td class="w-3/4 p-2 text-left border-b border-gray-300 leading-5 text-sm">
        <a href="https://chicocesar.com.br/agenda/">
          <h5>{concert.description}</h5>
        </a>
      </td>
    </tr>
  );
}

export default AgendaTable;
