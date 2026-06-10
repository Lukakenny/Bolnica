<?php

namespace Database\Factories;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    protected $model = Patient::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(), // Ovo kreira usera, ali mu ne daje rolu
            'date_of_birth' => $this->faker->date(),
            'blood_type' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            'email' => $this->faker->unique()->safeEmail(),
            'allergies' => $this->faker->sentence(),
        ];
    }

    /**
     * Konfiguriši pacijenta nakon kreiranja
     */
    public function configure()
    {
        return $this->afterCreating(function (Patient $patient) {
            // Pronađi usera koji je vezan za ovog pacijenta
            $user = $patient->user;

            // Ovde dodaješ rolu (koristim primer za Spatie, prilagodi ako koristiš svoj sistem)
            if ($user) {
                $user->assignRole('patient');
            }
        });
    }
}
