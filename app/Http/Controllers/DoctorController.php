<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Models\Doctor;
use App\Repositories\AppointmentRepository;
use App\Repositories\DoctorRepository;
use Inertia\Inertia;

class DoctorController extends Controller
{
    protected DoctorRepository $doctorRepo;

    protected AppointmentRepository $appointmentRepo;

    public function __construct(DoctorRepository $doctorRepo, AppointmentRepository $appointmentRepo)
    {
        $this->doctorRepo = $doctorRepo;
        $this->appointmentRepo = $appointmentRepo;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $doctor = auth()->user()->doctor;

        if (! $doctor) {
            return Inertia::render('Doctor/Home', [
                'appointments' => [],
            ]);
        }

        $appointments = $this->appointmentRepo->getForDoctor($doctor);

        return Inertia::render('Doctor/Home', [
            'appointments' => $appointments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreateDoctor');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorRequest $request)
    {

        $this->doctorRepo->createDoctor($request->validated());

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorRequest $request, Doctor $doctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        $doctor->delete();

        return redirect()->back();
    }
}
