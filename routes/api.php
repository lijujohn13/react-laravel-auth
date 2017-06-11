<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::post('login','Auth\LoginController@login');  
    Route::post('register','Auth\RegisterController@register');  
    Route::post('logout','Auth\LoginController@logout');
    Route::post('password/email','Auth\ForgotPasswordController@sendResetLinkEmail'); 
    Route::post('password/reset','Auth\ResetPasswordController@reset');
       
});
  

