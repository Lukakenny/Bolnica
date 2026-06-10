<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Patient extends Model
{
    /** @use HasFactory<\Database\Factories\PatientFactory> */
    use HasFactory;
    protected $fillable = ['user_id', 'date_of_birth', 'blood_type', 'medical_history_number', 'allergies'];

    public function user() :BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function appointments() :HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}
