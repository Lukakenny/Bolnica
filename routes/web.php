<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});


require __DIR__.'/settings.php';
