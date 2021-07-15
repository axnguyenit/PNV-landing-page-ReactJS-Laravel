<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandingPage extends Model
{
    use HasFactory;

    // protected $table = 'landing_pages';
    protected $primaryKey = 'id';
    // protected $fillable = [
    //     'name', 'url', 'description', 'meta', 'title', 'components'
    // ];
    // protected $casts = [
    //     'components' => 'array'
    // ];
}
