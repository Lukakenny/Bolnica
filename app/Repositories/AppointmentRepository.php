<?php

namespace App\Repositories;

use App\Models\Appointment;
use App\Models\Doctor;

class AppointmentRepository
{
    protected $appointment;

    public function __construct(Appointment $appointment)
    {
        $this->appointment = $appointment;
    }

    public function getForDoctor(Doctor $doctor)
    {
        return Appointment::where('doctor_id', $doctor->id)
            ->with('patient.user')
            ->orderBy('appointment_date')
            ->get();
    }
}
