<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class AppointmentFactory extends Factory
{
    public function definition(): array
    {
        return [
            // Nasumično biramo postojećeg doktora i pacijenta iz baze
            'doctor_id' => Doctor::inRandomOrder()->first()->id ?? Doctor::factory(),
            'patient_id' => Patient::inRandomOrder()->first()->id ?? Patient::factory(),

            // Termin u narednih 30 dana
            'appointment_date' => $this->faker->dateTimeBetween('now', '+30 days'),
            'reason' => $this->faker->sentence(),
        ];
    }
}
