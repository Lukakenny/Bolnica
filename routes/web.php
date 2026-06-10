<?php

use App\Http\Controllers\DashboardController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('doctors', DoctorController::class)->except(['index', 'show']);
});
Route::middleware(['auth', 'role:doctor'])->group(function () {

});
Route::middleware(['auth', 'role:patient'])->group(function () {
    Route::get('/patient', function () {
        return Inertia::render('Patient/Home');
    });
});




require __DIR__.'/settings.php';
