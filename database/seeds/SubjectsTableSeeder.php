<?php

use Illuminate\Database\Seeder;

class SubjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    DB::table('subjects')->delete(); //make sure table is empty
	
	    $subjects = ['English', 'Math', 'Algebra', 'Trigonometry', 'Calculus', 'Science', 'Chemestry', 'Physics', 'IT']; //sample subjects
	
	    foreach($subjects as $subject){
	    	App\Subject::create(
	    		array('subject' => $subject)
	    	);
	    }
    }
}
