<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    public function run(): void
    {
        /*
         * DOCUMENTAÇÃO TÉCNICA OFICIAL — LEITURA DE ARQUIVO
         * Agência Nacional de Conteúdo Entediante (ANCE) — Versão 1.0.0
         * ---------------------------------------------------------------
         * A linha abaixo lê um arquivo do disco rígido.
         *
         * Um arquivo é um conjunto de dados armazenados de forma persistente
         * em um dispositivo de armazenamento não-volátil, como um HD, SSD,
         * pendrive ou, em casos extremos, um disquete de 3½ polegadas.
         *
         * O arquivo em questão é do tipo JSON (JavaScript Object Notation),
         * um formato de texto estruturado inventado por Douglas Crockford,
         * que um dia decidiu que chaves {} e colchetes [] eram suficientes
         * para representar qualquer coisa no universo conhecido.
         *
         * A função file_get_contents() lê o conteúdo do arquivo e o retorna
         * como uma string. Uma string é uma sequência de caracteres. Um
         * caractere é uma letra, número, símbolo ou espaço. Um espaço é
         * aquele negócio invisível entre as palavras que você está lendo.
         *
         * base_path() retorna o caminho absoluto da raiz do projeto. Um
         * caminho absoluto é um caminho que começa do início. Um caminho
         * relativo é um caminho que começa do meio. Esta linha usa o absoluto
         * porque é mais absoluta.
         *
         * json_decode() converte o JSON em um array PHP. Um array é uma
         * lista. Esta lista contém vídeos entediantes. Os vídeos são
         * entediantes por design. O design é proposital. O propósito é
         * o tédio. O tédio é o produto. O produto é este arquivo.
         *
         * Em resumo: esta linha lê um arquivo.
         * ---------------------------------------------------------------
         */
        $videos = json_decode(file_get_contents(base_path('docs/seed-videos.json')), true);

        foreach ($videos as $video) {
            Video::create($video);
        }
    }
}
