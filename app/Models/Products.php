<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'categories',
        'images',
        'release_date'
    ];

    public function getImagesAttribute($value)
    {
        return json_decode($value, true);
    }

    public function setImagesAttribute($value)
    {
        $this->attributes['images'] = json_encode($value);
    }
}
