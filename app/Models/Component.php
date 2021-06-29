<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    use HasFactory;
    protected $table = 'components';
    protected $primaryKey = 'id';
    protected $casts = [
        'params' => 'array'
    ];
    protected $fillable = [
        'name', 'url', 'desc', 'params'
    ];

    public function containers() {
        return $this->hasMany(Container::class);
    }
}