<?php

namespace App\Http\Controllers;

use App\Student;
use App\Subject;
use Illuminate\Http\Request;

class SubjectsController extends Controller
{
    public function index()
    {
        return Subject::get();
    }

    public function register(Request $request){
        $student = Student::where('id', $request->student_id)->first();
        $student->subjects()->attach($request->subject_id);
        return [$student->subjects, $student->subject_ids];
    }

    public function unregister(Request $request){
        $student = Student::where('id', $request->student_id)->first();
        $student->subjects()->detach($request->subject_id);
        return [$student->subjects, $student->subject_ids];
    }
}
