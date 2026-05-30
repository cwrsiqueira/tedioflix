<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Inertia\Inertia;

class WatchController extends Controller
{
    public function __invoke(Video $video)
    {
        $related = Video::where('category', $video->category)
            ->where('id', '!=', $video->id)
            ->get();

        return Inertia::render('Watch', compact('video', 'related'));
    }
}
