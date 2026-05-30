<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $categories = Video::all()
            ->groupBy('category')
            ->map(fn($videos) => $videos->values())
            ->toArray();

        return Inertia::render('Home', compact('categories'));
    }
}
