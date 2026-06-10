<?php

namespace Database\Seeders;

use App\Models\Doctor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Generišemo tačno 15 lažnih doktora (zajedno sa njihovim user nalozima)
        Doctor::factory()
            ->count(15)
            ->create();
    }
}
