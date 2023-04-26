import AgendaTable from "./AgendaTable.tsx";
import type { AgendaItem } from "./AgendaTable.tsx";

function Agenda({ agendaItems }: {
  agendaItems: AgendaItem[];
}) {
  return (
    <div class="basis-2/4">
      <div class="bg-black p-5 text-white w-1/1 overflow-y-scroll h-120 bg-center bg-cover bg-no-repeat">
        <div class="flex justify-between">
          <h1 class="text-3xl font-thin">AGENDA</h1>
          <a href="https://chicocesar.com.br/agenda/">VER MAIS [+]</a>
        </div>
        <div class="mt-0 mb-0 max-w-50 h-1 bg-white w-1/12"></div>
        <table class="w-full">
          <div class="flex-auto flex justify-left text-white">
            {agendaItems.map((concert) => <AgendaTable concert={concert} />)}
          </div>
        </table>
      </div>
    </div>
  );
}

export default Agenda;
