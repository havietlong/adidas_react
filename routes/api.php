<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\OrdersDetailController;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/products', [ProductController::class, 'index']);
Route::prefix('/products')->group(function () {
    Route::get('/{category}', [ProductController::class, 'indexCategory']);
    Route::get('/{category}/{type}', [ProductController::class, 'indexType']);
    Route::post('/add', [ProductController::class, 'store']);

    
    Route::post('/add', [ProductController::class, 'store']);
    Route::get('/details/{id}', [ProductController::class, 'show']);
    Route::put('/update/{id}', [ProductController::class, 'update']);
    Route::delete('/delete/{id}', [ProductController::class, 'destroy']);
});

Route::prefix('/login')->group(function () {
    Route::post('/validate', [UserController::class, 'validateLogin']);
});

Route::get('/product_info/{id}', [ProductController::class, 'indexByID']);


Route::post('/checkOut', [OrdersController::class, 'addOrder']);
Route::post('/checkOutDetails', [OrdersDetailController::class, 'addOrderDetails']);

Route::get('/orders', [OrdersController::class, 'index']);
