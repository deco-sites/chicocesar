import AgendaTable from "./AgendaTable.tsx";
import type { AgendaItem } from "./AgendaTable.tsx";

function Agenda({ agendaItems }: {
    agendaItems: AgendaItem[];
  }) {
    return (
        <div class="bg-black p-5 text-white w-1/2	h-auto">
          <div class="flex justify-between">
            <h1 class="text-3xl">AGENDA</h1>
            <a href="https://chicocesar.com.br/agenda/">VER MAIS +</a>
          </div>
          <table class="w-full">
            <div class="flex-auto flex justify-left text-white">
              {agendaItems.map((concert) => <AgendaTable concert={concert} />)}
            </div>
          </table>
        </div>
    );
  }
  
  export default Agenda;