<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'name'=> $this->name,
            'category'=> $this->category,
            'description'=> $this->description,
            'images' => $this->images,
            'release_date'=> $this->release_date->format('Y-m-d H:i:s'),
        ];
    }
}
