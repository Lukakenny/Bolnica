<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{


     public function index()
     {
         return Inertia::render('dashboard', [
             'doctors' => Doctor::with('user')->get()
         ]);
     }
}
