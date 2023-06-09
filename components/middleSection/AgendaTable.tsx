export interface AgendaItem {
  date: string;
  location: string;
  description: string;
}

function AgendaTable({ concert }: { concert: AgendaItem }) {
  const { date, location, description } = concert;

  return (
    <>
      {/* Mobile Version */}
      <tr class="md:hidden w-full align-top mb-12 border-t border-b border-white">
        <td class="font-bold block">
          <a href="https://chicocesar.com.br/agenda/">
            <h5 class="mt-1 mb-1">{concert.date}</h5>
            <h5 class="mt-1 mb-1">{concert.location}</h5>
          </a>
        </td>
        <td class="text-left text-sm block mt-4">
          <a href="https://chicocesar.com.br/agenda/">
            <h5>{concert.description}</h5>
          </a>
        </td>
      </tr>

      {/* Desktop Version */}
      <tr class="hidden md:block w-full align-top mb-12">
        <td class="w-1/4 font-bold">
          <a href="https://chicocesar.com.br/agenda/">
            <h5 class="mt-1 mb-1 text-base">{concert.date}</h5>
            <h5 class="mt-1 mb-1 text-base">{concert.location}</h5>
          </a>
        </td>
        <td class="w-3/4 p-2 text-left leading-5 text-sm">
          <a href="https://chicocesar.com.br/agenda/">
            <h5>{concert.description}</h5>
          </a>
        </td>
      </tr>
    </>
  );
}

export default AgendaTable;
