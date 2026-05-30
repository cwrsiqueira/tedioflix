<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    // os campos que podem receber valores. Receber valores é o oposto de não receber valores.
    protected $fillable = ['category', 'title', 'youtube_id', 'description'];
}
