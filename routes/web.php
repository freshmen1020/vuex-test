<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main');
});

Route::group(['prefix'=>'api'], function(){
	Route::get('students', 'StudentsController@index');
	Route::get('subjects', 'SubjectsController@index');
	Route::post('register-student', 'StudentsController@store');
	Route::delete('delete-student/{id}', 'StudentsController@destroy');
	Route::post('register-to-subject', 'SubjectsController@register');
	Route::post('unregister-to-subject', 'SubjectsController@unregister');
});
