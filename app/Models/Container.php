<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Container extends Model
{
    use HasFactory;

    protected $table = 'containers';
    protected $primaryKey = 'id';

    // A container belongs to a component
    public function component() {
        return $this->belongTo(Component::class);
    }
}
