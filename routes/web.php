<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});
Route::middleware(['auth', 'role:doctor'])->group(function () {
    Route::get('/doctor', function () {
        return Inertia::render('Doctor/Home');
    });
});
Route::middleware(['auth', 'role:patient'])->group(function () {
    Route::get('/patient', function () {
        return Inertia::render('Patient/Home');
    });
});




require __DIR__.'/settings.php';
