<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{

    public function index()
    {
        return Student::get();
    }


    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
        ]);

        $student = Student::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);

        return $student;
    }

    public function update(Request $request, $id)
    {
        $student = Student::where('id', $id)->first();
        $student->first_name = $request->first_name;
        $student->last_name = $request->last_name;
        $student->save();

        return ['Student Updated'];
    }

    public function destroy($id)
    {
        $student = Student::where('id', $id)->first();
        $student->delete();

        return ['Student Deleted'];
    }
}
