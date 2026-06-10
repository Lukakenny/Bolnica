<?php

namespace App\Repositories;

use App\Enums\UserRole;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DoctorRepository
{
    protected $doctor;

    public function __construct(Doctor $doctor)
    {
        $this->doctor = $doctor;
    }

    public function createDoctor(array $data)
    {
        return DB::transaction(function () use ($data) {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'role' => UserRole::DOCTOR,
            ]);

            return Doctor::create([
                'user_id' => $user->id,
                'specialization' => $data['specialization'],
                'license_number' => $data['license_number'],
                'bio' => $data['bio'] ?? '',
                'is_active' => true,
            ]);
        });
    }
}
