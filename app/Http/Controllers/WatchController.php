<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Inertia\Inertia;

class WatchController extends Controller
{
    public function __invoke(Video $video)
    {
        return Inertia::render('Watch', compact('video'));
    }
}
