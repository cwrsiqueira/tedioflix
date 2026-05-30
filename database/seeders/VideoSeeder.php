<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    public function run(): void
    {
        $videos = json_decode(file_get_contents(base_path('docs/seed-videos.json')), true);

        foreach ($videos as $video) {
            Video::create($video);
        }
    }
}
