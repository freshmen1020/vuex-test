<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';
    protected $guarded = ['id'];
    protected $appends = ['subjects', 'subject_ids', 'edit_path', 'subjects_path'];

    public function subjects()
    {
        return $this->belongsToMany('App\Subject');
    }

    public function getEditPathAttribute()
    {
    	return '/students/'.$this->id.'/edit';
    }

    public function getSubjectsPathAttribute()
    {
    	return '/students/'.$this->id;
    }

    public function getSubjectsAttribute()
    {
        return $this->subjects()->get();
    }

    public function getSubjectIdsAttribute()
    {
        return $this->subjects()->pluck('subject_id');
    }
}
