<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Doctor>
 */
class DoctorFactory extends Factory
{
    protected $model = Doctor::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // Kreiramo novog korisnika i odmah mu dodeljujemo ulogu doktora
            'user_id' => User::factory()->create(['role' => 'doctor'])->id,

            // Nasumični medicinski podaci
            'specialization' => fake()->randomElement(['Kardiolog', 'Pedijatar', 'Hirurg', 'Dermatolog', 'Oftalmolog']),
            'license_number' => fake()->unique()->numerify('LIC-#####'), // npr. LIC-12345
            'bio' => fake()->paragraph(),
            'is_active' => fake()->boolean(90), // 90% šanse da je doktor aktivan
        ];
    }
}
